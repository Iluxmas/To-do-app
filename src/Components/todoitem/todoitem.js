import React, { Component } from "react";
import "./todoitem.css";
import trash from "./trash.png";
import imp from "./warning-sign.png";

export default function TodoListItem(props) {
  const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = props;

  let spanClassNames = "todo-list-item";
  let bttnImportantClassName = "btn btn-outline-success btn-sm";

  spanClassNames += done ? " done" : "";

  if (important) {
    bttnImportantClassName += " btn-important";
    spanClassNames += " important";
  }

  return (
    <div className={spanClassNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <div>
        <button type="button" className={bttnImportantClassName} onClick={onToggleImportant}>
          <img src={imp} className="btn-icon" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
          <img src={trash} className="btn-icon" />
        </button>
      </div>
    </div>
  );
}
