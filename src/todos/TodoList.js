import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoListItem.css";

const TodoList = ({ todos = [{ text: "Hello" }] }) => (
  <div className="list-wrapper">
    <NewTodoForm></NewTodoForm>
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;