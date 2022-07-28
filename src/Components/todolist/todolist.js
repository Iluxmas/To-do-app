import React from "react";
import TodoListItem from "../todoitem/todoitem";
import "./todolist.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map(({ id, ...rest }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...rest}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />{" "}
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
