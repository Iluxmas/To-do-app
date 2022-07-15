import React, { Component } from 'react';
import TodoList from '../todolist/todolist';
import AppHeader from '../appheader/appheader';
import SearchPanel from '../searchpanel/searchpanel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Добавить дела', important: false, id: 1},
      { label: 'Полюбить списки', important: true, id: 2 },
      { label: 'Перестать иронизировать', important: false, id: 3 },
      { label: 'Что-то еще', important: false, id: 4 }
        ]
  };

  maxId = 100;

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter(el => el.id != id); 

      return {
        todoData: newData
      };
    });
  };

  addItem = (text) => {

    const newTodo = {
      label: text,
      important: false,
      id: this.maxId++
    };

    const newData = this.state.todoData.concat(newTodo);
  
    this.setState(({ todoData }) => {
      return {
        todoData: newData
      };
    });

  };

  render () {
    return ( 
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/> 
      <div  className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList 
      todos={this.state.todoData} 
      onDeleted={this.deleteItem}/>

      <ItemAddForm onAdd={this.addItem}/>
    </div>
  );}

}
