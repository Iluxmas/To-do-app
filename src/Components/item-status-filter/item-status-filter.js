import React from "react";

export default function ItemStatusFilter(props) {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttonsElem = buttons.map(({ name, label }) => {
    const isActive = props.filterActive === name;
    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
    return (
      <button type="button" key={name} className={`btn ${clazz}`} onClick={() => props.onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttonsElem}</div>;
}
