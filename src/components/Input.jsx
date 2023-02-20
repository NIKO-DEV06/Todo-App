import React, { useState } from "react";

const Input = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      alert("Please Enter a todo.");
      return;
    }
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  const todoInputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Create a new text..."
          className=" w-[85%] pl-7 p-3 rounded-md outline-none md:w-1/2 lg:w-[40%] mb-3"
          autoComplete="off"
          id="todo"
          value={enteredTodo}
          onChange={todoInputChangeHandler}
        />
      </div>
    </form>
  );
};

export default Input;
