import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Card = ({ elem }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("show");
          cardRef.current.classList.remove("displayNone");
        } else {
          cardRef.current.classList.add("displayNone");
          cardRef.current.classList.remove("show");
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(cardRef.current);
  });

  return (
    <div ref={cardRef} className="card" key={elem}>
      {elem}
    </div>
  );
};

function InfinteScroll() {
  const [cards, setCards] = useState(["This is my first card"]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerLastNode = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          addNewCards();
          observerLastNode.unobserve(entry.target);
          observerLastNode.observe(containerRef.current.lastChild);
        }
      },
      { threshold: 1 }
    );
    observerLastNode.observe(containerRef.current.lastChild);

    return () => {
      observerLastNode.disconnect();
    };
  }, [cards]);

  const addNewCards = () => {
    const newCards = [
      ...Array(10)
        .fill()
        .map((_, index) => `This is new card ${cards.length + index + 1}`),
    ];
    console.log(newCards);
    setCards((prev) => [...prev, ...newCards]);
  };
  return (
    <div ref={containerRef} className="container">
      {cards.map((elem, index) => (
        <Card key={index} elem={elem} />
      ))}
    </div>
  );
}

export default InfinteScroll;
