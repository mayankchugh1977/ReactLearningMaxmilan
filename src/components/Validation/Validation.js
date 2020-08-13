import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text long enough';

    if (props.userInputlength <= 5){
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
            {
                props.userInputlength > 5 ?
                <p>TernamryOperator : Text long enough</p>:
                <p>TernamryOperator : Text too short</p>
            }
        </div>
    );
}; 

export default validation;