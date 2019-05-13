import React, { Component } from 'react';
import WorkCard from '../../components/WorkCard';
import '../Home/Home.css';
import '../../styles/style.css';
import SoftwareImage from '../../assets/img/software.jpg';
import DesignImage from '../../assets/img/design.jpg';
import BlockchainImage from '../../assets/img/blockchain.jpg';


class Work extends Component {
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
                    <div className="work-section text-center">
                        <div className="row justify-content-center">
                            <WorkCard title="SOFTWARE PROJECT" text="Web Application and Desktop Application" image={SoftwareImage}/>
                            <WorkCard title="DESIGN PROJECT" text="Poster Design" image={DesignImage}/>
                            <WorkCard title="BLOCKCHAIN PROJECT" text="Bitcoin and Ethereum" image={BlockchainImage}/>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Work;