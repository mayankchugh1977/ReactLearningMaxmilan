import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() =>{
      console.log('[Cockpit.js] useEffect... ');
      // Http request...
    //  const timer = setTimeout(() => {
      setTimeout(() => {
          alert('Saved data to cloud!');
      }, 1000);
      return () => {
        // clearTimeout(timer);
        console.log('[Cockpit.js] clean up work in useEffect... ');
      };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] clean up work in 2nd  useEffect... ');
        return () => {
          console.log('[Cockpit.js] clean up work in 2nd useEffect... ');
        };
    });

    let assignedClasses = [];
    let btnClass = '';

    console.log('[Cockpit.js] if(props.showPersons) value ...',props);

    if(props.showPersons) {
      console.log('[Cockpit.js] if(props.showPersons) true ');
        btnClass = classes.Red;
    }else{
      console.log('[Cockpit.js] if(props.showPersons) false ');
    }

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold); //classes = ['red'],'bold']
    }
    return(
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={props.clicked}>
            Cockpit Toggle Persons Button
          </button>
        </div>
    );
} 

export default React.memo(cockpit);