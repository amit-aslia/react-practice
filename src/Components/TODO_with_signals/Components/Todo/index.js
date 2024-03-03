import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todos({ todos }) {
  console.log("render todo Component");
  const [input, setInput] = useState("");

  const toggle = (id) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  const addNewTodo = (name) => {
    todos.value = [...todos.value, { id: uuidv4(), completed: false, name }];
  };

  const renderTodoList = (todo) => {
    return (
      <div onClick={() => toggle(todo.id)} key={todo.id} className="tasklist">
        <input type="checkbox" checked={todo.completed} />
        <div>{todo.name}</div>
      </div>
    );
  };

  const handleClick = () => {
    addNewTodo(input);
    setInput("");
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      addNewTodo(input);
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="todomain">
      <div>New Tasks</div>
      <input
        type="text"
        value={input}
        onKeyDown={handleKeydown}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add task</button>
      <div>{todos.value.map(renderTodoList)}</div>
    </div>
  );
}

export default Todos;
