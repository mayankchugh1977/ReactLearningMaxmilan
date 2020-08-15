import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot} from  'radium';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import styled from 'styled-components';
import Char from '../components/Char/Char';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
      
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         opacity: 0.5;
//         color: black;
//       }
//     `;      

class App extends Component {

// const app = (props) => {

  // const [personsState, setPersonsState] = useState ( {
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 }
  //   ]
  // });
  
  // const [otherState, setOtherState] = useState('some other value');

  // console.log(personsState, otherState);

  // const switchNameHandler = () => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   setPersonsState({
  //     persons: [
  //       { name: 'Maximilian', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ],
  //   otherState: personsState.otherState
  //   });
  // };


state = {
  persons: [
    { id: 'erwer', name: 'Max', age: 28 },
    { id: 'erwerf', name: 'Manu', age: 29 },
    { id: 'gtfb', name: 'Stephanie', age: 26 }
  ],
  otherState: 'some other value',
  showPersons: false,
  userName: 'supermax',
  userInput: ''
};

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

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  
  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons });

  // this.setState({
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: event.target.value, age: 29 },
  //     { name: 'Stephanie', age: 27 }
  //   ]
  // });
};

deletePersonHandler =(perIndex) => {
  // const persons = this.state.persons;
  // const persons = this.state.persons.slice();
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

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
              character={ch} 
              key={index}
              clicked={() => this.deleteUserInputHandler(index)} />;
    });

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    // let btnClass = '';

   

    if (this.state.showPersons){
      persons = (
        <div>
         
          <Persons 
            persons={this.state.persons} 
            clicked= {this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
          {/* {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })} */}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Max!')}
            changed={this.nameChangeHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div> 
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };

      // btnClass = classes.Red;
    }

    // let classes = ['red','bold'].join(' ');

    // let assignedClasses = [];

    // if(this.state.persons.length <= 2){
    //   assignedClasses.push(classes.red); //classes = ['red']
    // }

    // if(this.state.persons.length <= 1){
    //   assignedClasses.push(classes.bold); //classes = ['red'],'bold']
    // }

    return (
      // <StyleRoot>
      <div className={classes.App}>
         <Cockpit 
          title = {this.props.appTitle}
          showPersons={this.showPersons}
          persons={this.state.persons}
          clicked= {this.togglePersonHandler}/>
        {/* <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
           Toggle Persons Button
        </button> */}
        <hr/>
        {/*<button onClick={switchNameHandler}>Switch Name</button>
         <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        /> */}
        {/* <button 
          style={style}
          onClick={ () => this.switchNameHandler('Maximilian!!')}>Switch Name</button>   */}
        {/* <StyledButton alt={this.state.showPersons}
          // style={style}
          onClick={this.togglePersonHandler}>Toggle Person</StyledButton> */}
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle Persons StyledButton
        </StyledButton>   
        <hr/>
        <button className="button" onClick={this.togglePersonHandler}>
           Toggle Persons Button
        </button>
        <hr/>
        {/* <button className={btnClass} onClick={this.togglePersonHandler}>
           Toggle Persons Button
        </button> */}


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
        
      </div>
      // </StyleRoot>
    );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default app;
// export default Radium(App);
export default App;