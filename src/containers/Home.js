import React, { Component } from 'react';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {Bounce} from 'react-reveal';

const locale = require('react-redux-i18n').I18n;

class Home extends Component {
    render() {
        return (
            <Bounce>
                <div className="home-section">
                    <h4>{locale.t('home.name')}</h4>
                    <h2>{locale.t('home.portfolio')}</h2>
                    <div className="text-center">
                        <LinkContainer to="/contact">
                            <div>
                                <AwesomeButton type="primary" ripple={true}>
                                    <strong>{locale.t('home.contact')}</strong>
                                </AwesomeButton>
                            </div>
                        </LinkContainer>
                    </div>
                </div>
            </Bounce>
        );
    }
}


export default connect()(withLoading(Home));