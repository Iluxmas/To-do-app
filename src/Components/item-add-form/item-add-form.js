import React, { useState } from "react";
import "./item-add-form.css";

export default function ItemAddForm(props) {
  // state = {
  //   label: "",
  // };

  const [label, setLabel] = useState("");

  // onLabelChange = (event) => {
  //   this.setState({ label: event.target.value });
  // };

  function onSubmit(event) {
    event.preventDefault();
    props.onAdd(label);
    setLabel("");
  }

  return (
    <form className="item-add-form d-flex" onSubmit={(evt) => onSubmit(evt)}>
      <input
        type="text"
        className="form-control"
        onChange={(event) => setLabel(event.target.value)}
        placeholder="Что нужно сделать?"
        value={label}
        required
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
}
