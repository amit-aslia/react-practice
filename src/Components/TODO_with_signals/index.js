import React from "react";

import { signal, computed, effect } from "@preact/signals-react";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import SideBar from "./Components/SideBar";

import "./styles.css";

const LOCAL_STORAGE = "TODO";

const getTodosFromLocalStorage = () => localStorage.getItem(LOCAL_STORAGE);

const intialTodos = () => {
  const value = getTodosFromLocalStorage();
  if (value === null) return [];
  return JSON.parse(value);
};

const todos = signal(intialTodos());

effect(() => localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos.value)));

const TODOApp = () => {
  console.log("render TODO APP");
  console.log(todos.value);

  return (
    <div>
      <div>
        <Navbar todos={todos} />
        <div className="horizontal" />
      </div>
      <div className="todoContainer">
        <div className="col1">
          <Todo todos={todos} />
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
