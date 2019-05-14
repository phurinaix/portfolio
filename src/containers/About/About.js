import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Home/Home.css';
import '../../styles/style.css';
// import CatImage from '../../assets/img/cat.jpg';
import StudentImage from '../../assets/img/student.png';
import Pdf from '../../assets/pdf/resume.pdf';

class About extends Component {
    state = {
        isLoading: true
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
                    <div className="about-section text-center">
                        <img src={StudentImage} alt=""/><br/><br/><br/>
                        <div className="typewriter">
                            <div className="typewriter-text">
                                <h3>Hello, my name is Phurinat Puekkham.</h3>
                            </div>
                        </div>
                        <p>I am a fourth year student, Faculty of engineering, Software engineering, Thammasat University.</p>
                        <p>I love being a web developer.</p>
                        <Button href = {Pdf} target = "_blank">See Resume</Button>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default About;