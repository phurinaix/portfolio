import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import withLoading from './withLoading';
import { connect } from 'react-redux';
// import Pdf from '../assets/pdf/resume.pdf';
import Timeline from '../components/Timeline';

const locale = require('react-redux-i18n').I18n;

class About extends Component {
    render() {
        return (
            <div className="about-section text-center py-5 px-4">
                {/* <img src={StudentImage} alt=""/><br/><br/><br/> */}
                <h3>{locale.t('about.topic')}</h3>
                <div className="typewriter">
                    <div className="typewriter-text">
                        <p>{locale.t('about.name')}</p>
                    </div>
                </div>
                <p>{locale.t('about.detail')}</p>
                {/* <Timeline /> */}
            </div>
        );
    }
}

export default connect()(withLoading(About));