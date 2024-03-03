// App.js

import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const Card = ({ text }) => {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="card">
      {text}
    </div>
  );
};

const CardContainer = () => {
  const [cards, setCards] = useState(["This is first card"]);
  const cardContainerRef = useRef();

  useEffect(() => {
    const lastCardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadNewCards();
          lastCardObserver.unobserve(entry.target);
          lastCardObserver.observe(cardContainerRef.current.lastChild);
        }
      },
      { threshold: 1 }
    );

    lastCardObserver.observe(cardContainerRef.current.lastChild);

    return () => {
      lastCardObserver.disconnect();
    };
  }, [cards]);

  const loadNewCards = () => {
    const newCards = [];
    for (let i = 0; i < 10; i++) {
      newCards.push("This is New Card");
    }
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  return (
    <div ref={cardContainerRef} className="card-container">
      {cards.map((text, index) => (
        <Card key={index} text={text} />
      ))}
    </div>
  );
};

export default CardContainer;
