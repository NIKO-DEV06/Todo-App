import React, { useState } from "react";

import ListItem from "./ListItem";

const List = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const deleteTodoHandler = (id) => {
    props.newTodos(props.todos.filter((todo) => todo.id !== id));
  };

  //   console.log(props.todos.map((todo) => todo.completed));

  //   console.log(props.todos);

  return (
    <div className="flex justify-center">
      <ul className="w-[85%] bg-white rounded-md mt-3 md:w-1/2 lg:w-[40%]">
        <div>
          {props.todos.length === 0 ? (
            <div className=" text-center p-3 border-b-2 text-lg text-veryDarkGrayishBlue">
              There are no todos.🧍
            </div>
          ) : (
            ""
          )}
          {props.todos.map((todo) => (
            <ListItem
              completed={completed}
              onCheck={handleCheckboxChange}
              todos={props.todos}
              newTodos={props.newTodos}
              key={todo.id}
              todoItem={todo.todo}
              onDeleteTodo={() => {
                deleteTodoHandler(todo.id);
              }}
            />
          ))}
        </div>

        <div>
          <li className="p-4 w-full flex justify-between">
            <span className="ml-4 text-darkGrayishBlue font-semibold">
              {props.todos.length} items left
            </span>
            <button className="text-darkGrayishBlue font-semibold hover:text-veryDarkGrayishBlue duration-200">
              Clear Completed
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default List;
