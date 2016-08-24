import React, { Component } from 'react';
import TodoList from './TodoList'
import NewTodo from './NewTodo'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome!</h1>
        <h2 className="text-center">Enter what you need to do!</h2>
        <NewTodo />
        <TodoList />
      </div>
    )
  }
}
