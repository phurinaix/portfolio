import React, { Component } from 'react';
import '../Home/Home.css';
import '../../styles/style.css';

class Skills extends Component {
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
                    <div className="skills-section">
                        <h2>Skills</h2>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Skills;