import React, { Component } from "react";
import "./todoitem.css";
import trash from "./trash.png";
import imp from "./warning-sign.png";

export default function TodoListItem(props) {
  const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = props;

  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {" "}
        {label}{" "}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
        <img src={imp} className="btn-icon" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
        <img src={trash} className="btn-icon" />
      </button>
    </span>
  );
}
