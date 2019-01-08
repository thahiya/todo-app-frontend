import React, { Component } from 'react';
import Header from './components/header';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task); 
    this.setState ({
      tasks:currentListOfTasks
    });
  }

  render() {
    return (
      <div className="Container"> 
      <Header/>
      <TaskList tasks = {this.state.tasks}/>
      <TaskEntry onSaveTaskHandler = {this.addTask}/>
      </div>
      
    );
  }
}

export default App;

