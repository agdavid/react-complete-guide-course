import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
 
class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 21
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ],
  };

  switchNameHandler = (newName) => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        {
          name: newName,
          age: 21
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 26
        }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 21
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 26
        }
      ]
    });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style}
          onClick={() => this.switchNameHandler('New Max!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'New Max Again')}
          changed={this.nameChangeHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
