import React, { Component } from 'react';

class ErrorPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount () {
        setTimeout(() => { 
            this.setState(prevState => ({
                isLoading: !prevState.isLoading,
            }));
        }, 1000);
    }
    render() {
        return (
            <React.Fragment>
                <h1>Path doesn't exist</h1>
            </React.Fragment>
        );
    }
}

export default ErrorPage;