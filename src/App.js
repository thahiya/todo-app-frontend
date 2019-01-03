import React, { Component } from 'react';
import Header from './components/header';
import TaskList from './components/TaskList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
      <Header />
      <TaskList />
      </div>
    );
  }
}

export default App;
