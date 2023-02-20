import React, { Fragment, useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodoHandler = (todoItem) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          todo: todoItem,
          id: Math.random().toString(),
          completed: false,
        },
      ];
    });
  };

  // console.log(todoList[0].completed);

  // const handleFilterChange = (newFilter) => {
  //   setFilter(newFilter);
  // };
  // const filteredTodos =
  //   filter === "all"
  //     ? todoList
  //     : filter === "active"
  //     ? todoList.filter((todo) => !todo.completed)
  //     : todoList.filter((todo) => todo.completed);

  return (
    <Fragment>
      <Header />
      <Input onAddTodo={addTodoHandler} />
      <List todos={todoList} newTodos={setTodoList} />

      <Footer />
    </Fragment>
  );
};

export default App;
