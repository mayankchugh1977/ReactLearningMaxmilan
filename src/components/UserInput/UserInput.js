import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>User Name Input : 
                <input type="text"  onChange={props.changed} value={props.currentName}/>
            </p>
        </div>
    );
};

export default userInput;