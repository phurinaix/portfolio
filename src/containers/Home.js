import React, { Component } from 'react';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const locale = require('react-redux-i18n').I18n;

class Home extends Component {
    render() {
        return (
            <div className="home-section">
                <h4>{locale.t('home.name')}</h4>
                <h2>{locale.t('home.portfolio')}</h2>
                <div className="text-center">
                    <LinkContainer to="/contact">
                        {/* <Button variant="outline-warning" className="contact-button">{locale.t('home.contact')}</Button> */}
                        <AwesomeButton type="primary" ripple={true}>
                            <strong>{locale.t('home.contact')}</strong>
                        </AwesomeButton>
                    </LinkContainer>
                </div>
            </div>
        );
    }
}


export default connect()(withLoading(Home));