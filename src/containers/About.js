import React, { Component } from 'react';
import withLoading from './withLoading';
import { connect } from 'react-redux';
// import Pdf from '../assets/pdf/resume.pdf';
import aboutMeBg from '../assets/img/about/aboutme_bg_3.jpg';
import aboutMeProfile from '../assets/img/about/aboutme_profile.jpg';
import ProgressiveImage from '../components/ProgressiveImage';
import Timeline from '../components/Timeline';

const locale = require('react-redux-i18n').I18n;

class About extends Component {
    render() {
        return (
            <div className="about-section text-center">
                <div className="about-image">
                    <ProgressiveImage image={aboutMeBg} alt="Photo by Julius Silver from Pexels" classStyle="w-100 h-100 about-bg-image"/>
                    <ProgressiveImage image={aboutMeProfile} alt="Photo by Julius Silver from Pexels" classStyle="about-profile-image"/>
                </div>
                <div className="about-section-content">
                    <h3>{locale.t('about.topic')}</h3>
                    <p>{locale.t('about.name')}</p>
                    <p>{locale.t('about.detail')}</p>
                </div>
                <br/><br/>
                <h3>{locale.t('about.education.topic')}</h3>
                <div className="about-education">
                    <div className="col-md-6 mx-auto">
                        <Timeline education={locale.t('about.education')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(withLoading(About));