import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Max" age="21"/>
        <Person name="Anne" age="23"> This is a child prop </Person>
      </div>
    );
  }
}

export default App;
