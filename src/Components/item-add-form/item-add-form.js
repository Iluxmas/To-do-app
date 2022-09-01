import React, { useState } from "react";
import "./item-add-form.css";

export default function ItemAddForm(props) {
  const [label, setLabel] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    props.onAdd(label);
    setLabel("");
  }

  return (
    <form className="item-add-form d-flex" onSubmit={(evt) => onSubmit(evt)}>
      <input
        data-testid="formInput"
        type="text"
        className="form-control"
        onChange={(event) => setLabel(event.target.value)}
        placeholder="What needs to be done?"
        value={label}
        required
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
}
