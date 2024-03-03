import React, { useEffect, useRef, useState } from "react";

import "./styles.css";
import { nameList } from "./constants";

function ObserverList() {
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([]);
  const observeRef = useRef([]);

  const callback = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  };

  const options = {
    rootMargin: "-100px",
  };

  const newCallback = async (entries) => {
    const [lastNode] = entries;
    console.log("result", lastNode.isIntersecting);
    if (!lastNode.isIntersecting) return;
    getProductData();
    // lastNodeObserver.unobserve(lastNode.target);
    // lastNodeObserver.unobserve(observeRef.current.length - 1);
  };

  useEffect(() => {
    const lastNodeObserver = new IntersectionObserver(newCallback, options);

    if (observeRef.current) {
      lastNodeObserver.observe(
        observeRef.current[observeRef.current.length - 1]
      );
    }
    return () => {
      lastNodeObserver.unobserve(
        observeRef.current[observeRef.current.length - 1]
      );
    };
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (observeRef.current) {
      console.log(observeRef.current);
      observeRef.current.forEach((elem) => {
        observer.observe(elem);
      });
    }
    return () => {
      if (observeRef.current) {
        observeRef.current.forEach((elem) => {
          observer.unobserve(elem);
        });
      }
    };
  }, [observeRef, options]);

  const getNameOfProduct = () => {
    return new Promise((resolve) => {
      const names = [...Array(20).keys()].map(
        () => nameList[Math.floor(Math.random() * nameList.length)]
      );
      setTimeout(() => resolve(names), 1000);
    });
  };

  const getProductData = async () => {
    setLoading(true);
    const data = await getNameOfProduct();
    setNames((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const renderNames = (elem, index) => {
    return (
      <div
        ref={(elem) => (observeRef.current[index] = elem)}
        key={index}
        className="eachElem"
      >
        {index + 1} {elem}
      </div>
    );
  };

  return (
    <div>
      <h1>List of product</h1>
      {!loading ? (
        <div className="container">{names.map(renderNames)}</div>
      ) : null}
      {loading ? <div>loading</div> : null}
    </div>
  );
}

export default ObserverList;
