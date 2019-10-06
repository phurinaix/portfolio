import React, { Component } from 'react';
import SkillCard from '../components/SkillCard';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import Html from '../assets/img/icon/html.svg';
import Css from '../assets/img/icon/css.svg';
import Js from '../assets/img/icon/javascript.svg';
import Reactjs from '../assets/img/icon/react.svg';
import Vuejs from '../assets/img/icon/vue.png';
import Nodejs from '../assets/img/icon/nodejs.svg';
import Php from '../assets/img/icon/php.svg';
import Python from '../assets/img/icon/python.svg';
import Java from '../assets/img/icon/java.svg';
import SpringBoot from '../assets/img/icon/springboot.png';
import Mysql from '../assets/img/icon/mysql.svg';
import Postgres from '../assets/img/icon/postgres.svg';
import MongoDb from '../assets/img/icon/mongodb.svg';
import Docker from '../assets/img/icon/docker.svg';
import Git from '../assets/img/icon/git.svg';
import Sass from '../assets/img/icon/sass.png';
import Bootstrap from '../assets/img/icon/bootstrap.svg';
import Heroku from '../assets/img/icon/heroku.svg';
import Photoshop from '../assets/img/icon/photoshop.svg';

const locale = require('react-redux-i18n').I18n;

class Skills extends Component {
    state = {
        skills: [
            { name: 'HTML', logo: Html },
            { name: 'CSS', logo: Css },
            { name: 'Javascript', logo: Js },
            { name: 'React JS', logo: Reactjs },
            { name: 'Vue JS', logo: Vuejs },
            { name: 'Node.JS', logo: Nodejs },
            { name: 'PHP', logo: Php },
            { name: 'Python', logo: Python },
            { name: 'Java', logo: Java },
            { name: 'Spring Boot', logo: SpringBoot },
            { name: 'MySql', logo: Mysql },
            { name: 'PostgreSQL', logo: Postgres },
            { name: 'MongoDB', logo: MongoDb },
            { name: 'Docker', logo: Docker },
            { name: 'Git', logo: Git },
            { name: 'Sass', logo: Sass },
            { name: 'Bootstrap', logo: Bootstrap },
            { name: 'Heroku', logo: Heroku },
            { name: 'Photoshop', logo: Photoshop }
        ]
    }
    render() {
        return (
            <div className="skills-section mb-3">
                <h3>{locale.t('skills.topic')}</h3>
                <div className="row justify-content-center">
                    {this.state.skills.map((skill, index) => {
                        return <SkillCard key={index} name={skill.name} number={skill.number} logo={skill.logo}/>
                    })}
                </div>
            </div>
        );
    }
}

export default connect()(withLoading(Skills));