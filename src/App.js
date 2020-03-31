import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
