import React from 'react';
import { isPropertySignature } from 'typescript';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => (
    <div className="todo-item-container">
        <h3>{todo.title}</h3>
        <div className="buttons-container">
            {todo.completed
                ? null
                : <button
                    onClick={() => onCompletedPressed(todo.title)}
                    className="completed-button">Mark As Completed</button>}
            <button
                onClick={() => onRemovePressed(todo.title)}
                className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
