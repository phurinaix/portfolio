import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import withLoading from './withLoading';
import { connect } from 'react-redux';
// import Pdf from '../assets/pdf/resume.pdf';
import resumePDF from '../assets/pdf/phurinat_puekkham_resume.pdf';

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
                {/* <p>I love being a web developer.</p> */}
                <br/>
                {/* <Button href={resumePDF} target = "_blank">{locale.t('about.resume')}</Button> */}
            </div>
        );
    }
}

export default connect()(withLoading(About));