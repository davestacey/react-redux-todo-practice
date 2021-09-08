import React, { useState } from "react";
import { connect } from "react-redux";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="type here"
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
