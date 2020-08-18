import React, {Component} from 'react';
import Person from './Person/Person';

// const persons = (props) => {

class Persons extends Component {

      // static getDerivedStateFromProps(props, state) {
      //       console.log('[Persons.js] getDerivedStateFromProps...');
      // }

      // componentWillReceiveProps(props) {
      //       console.log('[Persons.js] componentWillReceiveProps...',props);
      // }

      shouldComponentUpdate(nextProps, nextState){
            console.log('[Persons.js] shouldComponentUpdate...');
            if(nextProps.persons != this.props.persons) {
                  console.log('[Persons.js] shouldComponentUpdate... true');
                  return true;
            }else {
                  console.log('[Persons.js] shouldComponentUpdate... false');
                  return false;
            }
            // return true;
      }

      getSnapshotBeforeUpdate(previousProps, previousState){
            console.log('[Persons.js] getSnapshotBeforeUpdate...');
            return {message: 'Snapshot!'};
      }

      // componentWillUpdate(){
      //    console.log('[Persons.js] componentWillUpdate');
      // }

      componentDidUpdate(){
         console.log('[Persons.js] componentDidUpdate');
      }
          
      componentDidUpdate(previousProps, previousState, snapshot) {
            console.log('[Persons.js] componentDidUpdate...');
            console.log(snapshot);
      }

      componentWillUnmount(){
            console.log('[Persons.js] componentWillUnmount');
      }
      render () {

      console.log('[Persons.js] rendering...');
      return this.props.persons.map((person, index) => {
        return (
                  <Person 
                        click={() => this.props.clicked(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}/>
                  );
            });
      }
      
};


export default Persons;      