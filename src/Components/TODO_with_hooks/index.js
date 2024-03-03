import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import SideBar from "./Components/SideBar";

import "./styles.css";

const LOCAL_STORAGE = "TODO";

const TODOApp = () => {
  console.log('render TODO APP');
  const getTodosFromLocalStorage = () => localStorage.getItem(LOCAL_STORAGE);

  const [todos, setTodos] = useState(() => {
    const value = getTodosFromLocalStorage();
    if (value === null) return [];
    return JSON.parse(value);
  });

  const toggle = (id) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTask);
  };

  const addNewTodo = (name) => {
    setTodos([...todos, { id: uuidv4(), completed: false, name }]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div>
        <Navbar todos={todos} />
        <div className="horizontal" />
      </div>
      <div className="todoContainer">
        <div className="col1">
          <Todo todos={todos} addNewTodo={addNewTodo} toggle={toggle} />
        </div>
        <div className="vertical col2" />
        <div className="col3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default TODOApp;
