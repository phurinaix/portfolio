import React, { Component } from 'react';
import withLoading from './withLoading';

class ErrorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Path doesn't exist</h1>
            </React.Fragment>
        );
    }
}

export default withLoading(ErrorPage);