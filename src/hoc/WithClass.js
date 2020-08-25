import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WithComponenet, className) => {
    return props => (
            <div className={className}>
                <WithComponenet {...props} />
            </div>
    );
};

export default withClass;