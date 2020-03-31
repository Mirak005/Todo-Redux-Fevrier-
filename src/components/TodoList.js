import React from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  toggleEdit,
  editTodo
} from "../js/actions/index";

import TodoCard from "./TodoCard";

const TodoList = props => {
  console.log(props);
  return (
    <section className="bg-light container add-todo-div">
      <div className="row justify-content-center">
        <p className="h1">Let's get some work done!</p>
      </div>
      <ul className="list-group list"></ul>

      {props.todoList.map(el => (
        <TodoCard
          key={el.id}
          el={el}
          removeTodo={props.deleteTodo}
          handleComplete={props.toggleComplete}
          toggleEdit={props.toggleEdit}
          editTodo={props.editTodo}
        />
      ))}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDisptachToProps = dispatch => {
  return {
    deleteTodo: payload => dispatch(deleteTodo(payload)),
    toggleComplete: payload => dispatch(toggleComplete(payload)),
    toggleEdit: payload => dispatch(toggleEdit(payload)),
    editTodo: payload => dispatch(editTodo(payload))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(TodoList);
