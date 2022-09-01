import React, { Component } from "react";
import TodoList from "../todolist/todolist";
import AppHeader from "../appheader/appheader";
import SearchPanel from "../searchpanel/searchpanel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Пройти собеседование"),
      this.createTodoItem("Добавить дела"),
      this.createTodoItem("Полюбить списки"),
      this.createTodoItem("Перестать иронизировать"),
    ],
    term: "",
    filter: "all",
  };

  createTodoItem(label) {
    return {
      label,
      important: label === "Пройти собеседование" ? true : false,
      done: label === "Перестать иронизировать" ? true : false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((el) => el.id != id);

      return {
        todoData: newData,
      };
    });
  };

  addItem = (text) => {
    const newTodo = this.createTodoItem(text);
    const newData = this.state.todoData.concat(newTodo);

    this.setState(({ todoData }) => {
      return {
        todoData: newData,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const newItem = { ...arr[idx], [propName]: !arr[idx][propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearch = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) return items;
    return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;

      case "active":
        return items.filter((el) => !el.done);

      case "done":
        return items.filter((el) => el.done);

      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <ItemAddForm onAdd={this.addItem} />

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearch} />
          <ItemStatusFilter filterActive={filter} onFilterChange={this.onFilterChange} />
        </div>
      </div>
    );
  }
}
