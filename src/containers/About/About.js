import React, { Component } from 'react';
import '../Home/Home.css';
import '../../styles/style.css';

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
                    <h2>About</h2>
                }
            </React.Fragment>
        );
    }
}

export default About;