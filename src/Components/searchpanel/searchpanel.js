import React, { useState } from "react";
import "./searchpanel.css";

export default function SearchPanel(props) {
  const [term, setTerm] = useState("");

  const onSearch = (event) => {
    const term = event.target.value;
    setTerm(term);
    props.onSearchChange(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type here to search..."
      value={term}
      onChange={(evt) => onSearch(evt)}
    />
  );
}
