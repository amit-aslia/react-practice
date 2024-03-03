import React, { useState } from "react";

function Todos({ todos, toggle, addNewTodo }) {
  console.log('render todo Component');
  const [input, setInput] = useState('');
  const renderTodoList = (todo) => {
    return (
      <div key={todo.id} className="tasklist">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
        />
        <div>{todo.name}</div>
      </div>
    );
  };

  const handleClick = () => {
    addNewTodo(input);
    setInput('');
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      addNewTodo(input);
      setInput('');
    }
  };

  const handleChange = e => {
    setInput(e.target.value);
  }

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
      <div>{todos.map(renderTodoList)}</div>
    </div>
  );
}

export default Todos;
