import React, { Component } from 'react';
import withLoading from '../withLoading';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './Home.css';
import '../../styles/style.css';

class Home extends Component {
    state = {
        isLoading: true
    }
    render() {
        const { isLoading } = this.props;
        return (
            <React.Fragment>
                {isLoading ? 
                    <div className="loading-bar">
                        <p className="loading-text">LOADING ...</p>
                        <div className="progress progress-striped">
                            <div className="progress-bar" >
                            </div>                       
                        </div> 
                    </div>
                :
                    <div className="home-section">
                        <h4>PHURINAT PUEKKHAM</h4>
                        <h2>PORTFOLIO</h2>
                        <ButtonToolbar>
                            <LinkContainer to="/contact">
                                <Button variant="outline-warning" className="contact-button">CONTACT ME</Button>
                            </LinkContainer>
                        </ButtonToolbar>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default withLoading(Home);