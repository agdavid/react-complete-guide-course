import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
 
class App extends Component {
  state = {
    persons: [
      {
        id: 1, 
        name: 'Max',
        age: 21
      },
      {
        id: 2,
        name: 'Manu',
        age: 29
      },
      {
        id: 3,
        name: 'Stephanie',
        age: 26
      }
    ],
    showPersons: false,
    authenticated: false
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;  
    
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;