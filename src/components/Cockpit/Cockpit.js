import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

    useEffect(() =>{
      console.log('[Cockpit.js] useEffect... ');
      // Http request...
    //  const timer = setTimeout(() => {
      // setTimeout(() => {
      //     alert('Saved data to cloud!');
      // }, 1000);
      toggleBtnRef.current.click()
      return () => {
        // clearTimeout(timer);
        console.log('[Cockpit.js] clean up work in useEffect... ');
      };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] in 2nd  useEffect... ');
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
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
            Cockpit Toggle Persons Button
          </button>
          {/* <button onClick={props.login}>Log in</button> */}
          {/* <AuthContext.Consumer>
              {(contxet) => 
                  <button onClick={contxet.login}>Log in</button>
                } 
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
} 

export default React.memo(cockpit);