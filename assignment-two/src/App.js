import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './CharComponent/CharComponent.css';

// 1. [x] Create an input field (in App) with a change listener which outputs the length of the entered text below it (e.g., in a paragraph)
// 2. [x] Create a new component (ValidationComponent) which receives the text length as a prop 
// 3. [x] Inside ValidationComponent, output "Text too short" or "Text long enough" depending on the text length (e.g., 5 character minimum)
// 4. [x] Create another component (CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
// 5. [x] Render a list of CharComponents where each CharComponent receives a different letter of the entered text (an initial input field as a prop)
// 6. [x] When you click a CharComponent it should be removed from the entered text

class App extends Component {
  state = {
    currentInput: '',
    currentLength: null,
  }

  inputComponentChangeHandler = (event) => {
    const newInput = event.target.value;
    this.setState({ currentInput: newInput });

    if ( newInput.length !== null ) {
      const newLength = newInput.length;
      this.setState({ currentLength: newLength });
    } 
  }

  deleteCharHandler = (charIndex) => {
    let charArray = this.state.currentInput.split('');
    charArray.splice(charIndex,1); 
    this.setState({ 
      currentInput: charArray.join('') 
    });


    if ( this.state.currentInput !== null ) {
      const newLength = this.state.currentInput.length;
      this.setState({ currentLength: newLength });
    } 
  }

  render() {
    let characters = null;
    
    if ( this.state.currentInput !== null ) {
     characters = (
        <div>
          {this.state.currentInput.split('').map( (l, index) => {
            return (
              <CharComponent 
                className="CharComponent" 
                letter={l} 
                key={index}
                click={() => this.deleteCharHandler(index)}/>
            );
          })}
        </div>
      ); 
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment Two</h1>
        </header>
        <InputComponent
          currentInput={this.state.currentInput}
          currentLength={this.state.currentLength}
          changed={(event) => this.inputComponentChangeHandler(event)}/>
        <ValidationComponent 
          currentLength={this.state.currentLength}
        />
        {characters}
      </div>
    );
  }
}

export default App;
