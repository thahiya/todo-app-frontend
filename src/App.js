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
    const id = (Math.random () * 100);

    task = {...task, id};

    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task); 

    this.setState ({
      tasks:currentListOfTasks
    });
  }

  removeTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.splice(task, 1);
    this.setState({
      tasks: currentListOfTasks
    });
  }

  handleTaskLength = arr => {
    const arrLength = arr.length;
    return arrLength;
  }

  render() {
    return (
      <div className="Container"> 
        <Header/>
        <TaskEntry
          onSaveTaskHandler = {this.addTask}
          onDeleteTaskHandler = {this.removeTask}
        />
        <p>Things to do:  {this.handleTaskLength(this.state.tasks)} </p>
        <TaskList
          tasks = {this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
