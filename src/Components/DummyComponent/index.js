import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.css";
import Child from "./Child";
/*
    useMemo
    useCallback
    React.memo
*/

function Dummy() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setData(data);
      setPaginatedData(data.slice(0, 10));
    };
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleLoadMore = () => {
    setPaginatedData((prevData) => [
      ...prevData,
      ...data.slice(prevData.length, prevData.length + 10),
    ]);
  };

  const handleCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 3);
  };

  const handleX = useCallback(() => 'amit', []);

  const obj = useMemo(() => {
    return {};
  }, []);

  return (
    <div className="container">
      <Child handleX={handleX} obj={obj} />
      <button onClick={handleCount}>{count} increment</button>
      {paginatedData.map((elem) => {
        return (
          <div className="eachElem" key={elem.id}>
            {elem.title}
          </div>
        );
      })}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}

export default Dummy;
