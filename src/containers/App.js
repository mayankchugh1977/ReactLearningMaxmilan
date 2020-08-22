import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import styled from 'styled-components';
import Char from '../components/Char/Char';
import WithClass from '../hoc/WithClass';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
            color: black;
            background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        }
      `;   

class App extends Component {

  constructor (props) {
    super(props);
    console.log('[App.js] constructor');
  }

state = {
  persons: [
    { id: 'erwer', name: 'Max', age: 28 },
    { id: 'erwerf', name: 'Manu', age: 29 },
    { id: 'gtfb', name: 'Stephanie', age: 26 }
  ],
  otherState: 'some other value',
  showPersons: false,
  showCockpit: true,
  userName: 'supermax',
  userInput: ''
};

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}

componentWillMount(){
  console.log('[App.js] componentWillMount');
}

componentDidMount(){
  console.log('[App.js] componentDidMount');
}

userNameChangeHandler = (event) => {
  this.setState({userName: event.target.value});
};

userInputChangeHandler = (event) => {
  this.setState({userInput: event.target.value});
};

switchNameHandler = (newName) => {
  // console.log('Was clicked!');
  // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  this.setState({
    persons: [
      { id: 'erwer', name: newName, age: 28 },
      { id: 'erwerf', name: 'Manu', age: 29 },
      { id: 'gtfb', name: 'Stephanie', age: 27 }
    ]
  });
};

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}
   
componentDidUpdate() {
     console.log('[App.js] componentDidUpdate...');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate...');
  return true;
}


nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons });
};

deletePersonHandler =(perIndex) => {
  const persons = [...this.state.persons];
  persons.splice(persons,1);

  this.setState({persons: persons});
};

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
};

deleteUserInputHandler =(index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({userInput: updateText});
};

render() {
    console.log('[App.js] render');
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
              character={ch} 
              key={index}
              clicked={() => this.deleteUserInputHandler(index)} />;
    });

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
         
          <Persons 
            persons={this.state.persons} 
            clicked= {this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
         
        </div> 
      );
      
    }

  
    return (
      // <div className={classes.App}>
      <WithClass classes={classes.App}>
        <button 
          onClick={ () => {
            this.setState({showCockpit: false});
        }}
        >
          Remove Cockpit</button>
        {this.state.showCockpit ? ( 
          <Cockpit 
            title = {this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked= {this.togglePersonHandler}/>
        ): null}
        {persons}
        <hr/>
        <hr/>
          <ul> <h1>Assignment One </h1></ul>
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
          <UserInput changed={this.userNameChangeHandler} currentName={this.state.userName}/>
          <UserOutput currentUserName={this.state.userName}/>
        <hr/>
        <hr/>
          <ul> <h1>Assignment Two </h1></ul>
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

          <input type="text" onChange={this.userInputChangeHandler} userInput={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation userInputlength = {this.state.userInput.length}/>
          {charList}
        </WithClass>
      // {/* </div> */}
    );
    
  }
}

export default App;