import React, { Component } from 'react';
import withLoading from './withLoading';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Home extends Component {
    render() {
        return (
            <div className="home-section">
                <h4>PHURINAT PUEKKHAM</h4>
                <h2>PORTFOLIO</h2>
                <ButtonToolbar>
                    <LinkContainer to="/contact">
                        <Button variant="outline-warning" className="contact-button">CONTACT ME</Button>
                    </LinkContainer>
                </ButtonToolbar>
            </div>
        );
    }
}

export default withLoading(Home);