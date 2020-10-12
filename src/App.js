import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title : 'Complete Deep Learning.',
        completed : false
      },
      {
        id : 2,
        title : 'Prepare Lunch.',
        completed : false
      },
      {
        id : 3,
        title : 'Work on ADS Assignment.',
        completed : false
      }
    ]
  }

// Task completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  } 

//delete task
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: 4,
      title,
      completed: false
    } 
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
       <Todos todos = {this.state.todos} markComplete = {this.markComplete}
       deleteTodo = {this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
