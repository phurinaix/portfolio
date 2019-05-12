import React, { Component } from 'react';
import './Home.css';
import '../../styles/style.css';

class Home extends Component {
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
                    <React.Fragment>
                        <h4>PHURINAT PUEKKHAM</h4>
                        <h2>PORTFOLIO</h2>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default Home;