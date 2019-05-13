import React, { Component } from 'react';
import WorkCard from '../../components/WorkCard';
import ProjectCard from '../../components/ProjectCard';
import '../Home/Home.css';
import '../../styles/style.css';
import SoftwareImage from '../../assets/img/software.jpg';
import DesignImage from '../../assets/img/design.jpg';
import BlockchainImage from '../../assets/img/blockchain.jpg';


class Work extends Component {
    state = {
        isLoading: true,
        projectType: ""
    }
    componentDidMount () {
        setTimeout(() => { 
            this.setState(prevState => ({
                isLoading: !prevState.isLoading,
            }));
        }, 1000);
    }
    projectHandle = (projectType) => {
        this.setState({ projectType });
    }
    render() {
        console.log(this.state.projectType);
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
                            {this.state.projectType === "" ?
                                <React.Fragment>
                                    <WorkCard title="SOFTWARE PROJECT" text="Web Application and Desktop Application" image={SoftwareImage} click={this.projectHandle}/>
                                    <WorkCard title="DESIGN PROJECT" text="Poster Design" image={DesignImage} click={this.projectHandle}/>
                                    <WorkCard title="BLOCKCHAIN PROJECT" text="Bitcoin and Ethereum" image={BlockchainImage} click={this.projectHandle}/>
                                </React.Fragment>
                            :
                                <div>
                                    
                                </div>
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Work;