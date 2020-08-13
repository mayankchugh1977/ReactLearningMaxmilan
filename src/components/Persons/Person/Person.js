import React from 'react';
// import Radium from 'radium';
// import './Person.css';
// import styled from 'styled-components';
import classes from './Person.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//             width: 450px;
//     }
// `;

const person = ( props ) => {

    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    // const rnd = Math.random();

    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        
        // <div className="Person" style={style}>
        // <StyledDiv>
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        // </StyledDiv>
         // </div>
    )
};

export default person;
// export default Radium(person);