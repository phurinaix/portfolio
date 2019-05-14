import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar';
import '../../styles/style.css';
import Html from '../../assets/img/icon/html.svg';
import Css from '../../assets/img/icon/css.svg';
import Js from '../../assets/img/icon/javascript.svg';
import Reactjs from '../../assets/img/icon/react.svg';
import Nodejs from '../../assets/img/icon/nodejs.svg';
import Php from '../../assets/img/icon/php.svg';
import Python from '../../assets/img/icon/python.svg';
import Docker from '../../assets/img/icon/docker.svg';
import Git from '../../assets/img/icon/git.svg';
import Photoshop from '../../assets/img/icon/photoshop.svg';

class Skills extends Component {
    state = {
        isLoading: true,
        skills: [
            {name: 'HTML', number: 90, logo: Html},
            {name: 'CSS', number: 70, logo: Css},
            {name: 'JAVASCRIPT', number: 80, logo: Js},
            {name: 'REACT', number: 60, logo: Reactjs},
            {name: 'NODE.JS', number: 60, logo: Nodejs},
            {name: 'PHP', number: 60, logo: Php},
            {name: 'PYTHON', number: 50, logo: Python},
            {name: 'Docker', number: 60, logo: Docker},
            {name: 'Git', number: 70, logo: Git},
            {name: 'Photoshop', number: 70, logo: Photoshop}
        ]
    }
    componentDidMount () {
        setTimeout(() => { 
            this.setState(prevState => ({
                isLoading: !prevState.isLoading,
            }));
        }, 1000);
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ? 
                    <div className="loading-bar">
                        <p className="loading-text">LOADING ...</p>
                        <div className="progress progress-striped">
                            <div className="progress-bar" >
                            </div>                       
                        </div> 
                    </div>
                :
                    <div className="skills-section">
                        <h3>SKILLS</h3>
                        {this.state.skills.map((skill, index) => {
                            return <ProgressBar key={index} name={skill.name} number={skill.number} logo={skill.logo}/>
                        })}
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Skills;