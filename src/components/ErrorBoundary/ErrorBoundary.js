import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: 'sadsad'
    }

    componentDidCatch = (error, info) => {
        this.setState({hassError: true, errorMessage: error});
    }

    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
            // return <h1>Something went wrong</h1>;
        }else{
            return this.props.children;
        }

    }
}

export default ErrorBoundary;