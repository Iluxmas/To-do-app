import React from "react";
import "./appheader.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app__header d-flex">
      <h1>My Todo List</h1>
      <h2 data-testid="h2">
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
