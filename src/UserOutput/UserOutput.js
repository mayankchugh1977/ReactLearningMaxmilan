import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is user name Input {props.currentUserName}</p>
        </div>
    );
}

export default userOutput;
