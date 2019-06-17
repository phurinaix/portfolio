import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';
import withLoading from './withLoading';
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

class Skills extends Component {
    state = {
        skills: [
            {name: 'HTML', number: 80, logo: Html},
            {name: 'CSS', number: 70, logo: Css},
            {name: 'JAVASCRIPT', number: 75, logo: Js},
            {name: 'REACT', number: 70, logo: Reactjs},
            {name: 'NODE.JS', number: 70, logo: Nodejs},
            {name: 'PHP', number: 60, logo: Php},
            {name: 'PYTHON', number: 50, logo: Python},
            {name: 'Docker', number: 50, logo: Docker},
            {name: 'Git', number: 60, logo: Git},
            {name: 'Photoshop', number: 50, logo: Photoshop}
        ],
        key1: false,
        key2: false
    }
    render() {
        const { key1, key2 } = this.state;
        return (
            <div className="skills-section mb-3">
                <h3>SKILLS</h3>
                {this.state.skills.map((skill, index) => {
                    return <ProgressBar key={index} name={skill.name} number={skill.number} logo={skill.logo}/>
                })}
            </div>
        );
    }
}

export default withLoading(Skills);