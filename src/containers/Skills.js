import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import Html from '../assets/img/icon/html.svg';
import Css from '../assets/img/icon/css.svg';
import Js from '../assets/img/icon/javascript.svg';
import Reactjs from '../assets/img/icon/react.svg';
import Nodejs from '../assets/img/icon/nodejs.svg';
import Php from '../assets/img/icon/php.svg';
import Python from '../assets/img/icon/python.svg';
import Docker from '../assets/img/icon/docker.svg';
import Git from '../assets/img/icon/git.svg';
import Photoshop from '../assets/img/icon/photoshop.svg';

const locale = require('react-redux-i18n').I18n;

class Skills extends Component {
    state = {
        skills: [
            {name: 'HTML', number: 80, logo: Html},
            {name: 'CSS', number: 70, logo: Css},
            {name: 'JAVASCRIPT', number: 75, logo: Js},
            {name: 'REACT', number: 70, logo: Reactjs},
            {name: 'NODE.JS', number: 70, logo: Nodejs},
            {name: 'PHP', number: 60, logo: Php},
            // {name: 'PYTHON', number: 40, logo: Python},
            {name: 'Docker', number: 40, logo: Docker},
            {name: 'Git', number: 60, logo: Git},
            {name: 'Photoshop', number: 50, logo: Photoshop}
        ]
    }
    render() {
        return (
            <div className="skills-section mb-3">
                <h3>{locale.t('skills.topic')}</h3>
                {this.state.skills.map((skill, index) => {
                    return <ProgressBar key={index} name={skill.name} number={skill.number} logo={skill.logo}/>
                })}
            </div>
        );
    }
}

export default connect()(withLoading(Skills));