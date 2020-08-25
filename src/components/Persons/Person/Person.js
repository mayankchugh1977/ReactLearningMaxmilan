import React, { Component, Fragment }from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
// const person = ( props ) => {

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;


    componentDidMount(){
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render (){
        console.log('[Person.js rendering ...]');

        return (
            
            <Auxiliary>
            {/* // <React.Fragment> */}
            {/* <Fragment> */}
            {/* <AuthContext.Consumer>
                {(context) => 
                    context.authenticated ? <p> Authenticated! </p> : <p>Please log in</p>
                }
            </AuthContext.Consumer> */}
            {this.context.authenticated ? <p> Authenticated! </p> : <p>Please log in</p>}
                {/* {this.props.isAuth ? <p> Authenticated! </p> : <p>Please log in</p>} */}
                <p  onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            {/* </Fragment> */}
        {/* </React.Fragment> */}
         </Auxiliary>
        );

    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);