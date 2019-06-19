import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import Pdf from '../assets/pdf/resume.pdf';

const locale = require('react-redux-i18n').I18n;

class About extends Component {
    render() {
        return (
            <div className="about-section text-center py-5 px-2">
                {/* <img src={StudentImage} alt=""/><br/><br/><br/> */}
                <h3>{locale.t('about.topic')}</h3>
                <div className="typewriter">
                    <div className="typewriter-text">
                        <p>Hello, my name is Phurinat Puekkham.</p>
                    </div>
                </div>
                <p>I am a fourth year student, Faculty of engineering, Software engineering, Thammasat University.</p>
                <p>I love being a web developer.</p>
                <br/>
                <Button href = {Pdf} target = "_blank">See Resume</Button>
            </div>
        );
    }
}

export default connect()(withLoading(About));