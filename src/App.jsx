import React, { Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

const getLocalTodos = () => {
  let list = localStorage.getItem("todoArray");
  if (list) {
    return JSON.parse(localStorage.getItem("todoArray"));
  } else {
    return [];
  }
};

const App = () => {
  const [todoList, setTodoList] = useState(getLocalTodos());
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoArray", JSON.stringify(todoList));
  }, [todoList]);

  // useEffect(() => {
  //   const storedArray = localStorage.getItem("todoArray");
  //   if (storedArray) {
  //     setTodoList(JSON.parse(storedArray));
  //   }
  // }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const clearCompletedHandler = () => {
    setTodoList(todoList.filter((todo) => !todo.completed));
  };

  const filteredTodos =
    filter === "all"
      ? todoList
      : filter === "active"
      ? todoList.filter((todo) => !todo.completed)
      : todoList.filter((todo) => todo.completed);

  return (
    <Fragment>
      <Header theme={theme} onToggleTheme={handleThemeSwitch} />
      <Input onAddTodo={addTodoHandler} />
      <List
        todos={filteredTodos}
        newTodos={setTodoList}
        onClearCompleted={clearCompletedHandler}
      />
      <Footer onFilterChange={handleFilterChange} />
    </Fragment>
  );
};

export default App;
