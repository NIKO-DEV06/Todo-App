import React, { useState, useEffect } from "react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

const getLocalTodos = () => {
  let storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return props.todos;
  }
};
const List = (props) => {
  const [todoDrag, updateTodoDrag] = useState(getLocalTodos());

  useEffect(() => {
    updateTodoDrag(todoDrag);
  }, [todoDrag]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todoDrag);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTodoDrag(items);

    // Save the updated state to localStorage
    localStorage.setItem("todos", JSON.stringify(items));
  };

  const deleteTodoHandler = (id) => {
    props.newTodos(props.todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="flex justify-center">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => {
            return (
              <ul
                className="w-[85%] bg-white dark:bg-veryDarkDesaturatedBlue rounded-md mt-3 md:w-1/2 lg:w-[40%]"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.todos.length === 0 ? (
                  <div className=" text-center p-3 border-b-2 dark:border-veryDarkGrayishBlue text-lg text-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:text-veryLightGrayishBlue rounded-t-md">
                    There are no todos.🧍
                  </div>
                ) : null}
                {todoDrag.map((todo, index) => {
                  return (
                    <ListItem
                      key={todo.id}
                      completed={todo.completed}
                      todoItem={todo.todo}
                      onId={todo.id}
                      onIndex={index}
                      onCheck={() => {
                        const newTodos = [...props.todos];
                        const index = newTodos.findIndex(
                          (t) => t.id === todo.id
                        );
                        newTodos[index].completed = !newTodos[index].completed;
                        props.newTodos(newTodos);
                      }}
                      onDeleteTodo={() => {
                        deleteTodoHandler(todo.id);
                      }}
                    />
                  );
                })}
                {provided.placeholder}

                <div>
                  <li className="p-4 w-full flex justify-between ">
                    <span className="ml-4 text-darkGrayishBlue font-semibold">
                      {props.todos.filter((todo) => !todo.completed).length}{" "}
                      items left
                    </span>
                    <button
                      onClick={() => {
                        const newTodos = [...props.todos];
                        const filtered = newTodos.filter((t) => !t.completed);
                        props.newTodos(filtered);
                      }}
                      className="text-darkGrayishBlue font-semibold hover:text-veryDarkGrayishBlue duration-200 dark:hover:text-veryLightGrayishBlue"
                    >
                      Clear Completed
                    </button>
                  </li>
                </div>
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
