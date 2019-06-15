import React, { Component } from 'react';
import WorkCard from '../../components/WorkCard';
// import ProjectCard from '../../components/ProjectCard';
import withLoading from '../withLoading';
import '../Home/Home.css';
import '../../styles/style.css';
import SoftwareImage from '../../assets/img/software.jpg';
import DesignImage from '../../assets/img/design.jpg';
import BlockchainImage from '../../assets/img/blockchain.jpg';
import ProjectBoard from '../../components/ProjectBoard';
import softwareImage1 from '../../assets/img/software/1.jpg';
import softwareImage2 from '../../assets/img/software/2.jpg';
import softwareImage3 from '../../assets/img/software/3.jpg';
import softwareImage4 from '../../assets/img/software/4.jpg';
import softwareImage5 from '../../assets/img/software/5.jpg';
import softwareImage6 from '../../assets/img/software/6.jpg';
import softwareImage7 from '../../assets/img/software/7.jpg';
import softwareImage8 from '../../assets/img/software/8.jpg';
import softwareImage9 from '../../assets/img/software/9.jpg';
import softwareImage10 from '../../assets/img/software/10.jpg';
import softwareImage11 from '../../assets/img/software/11.jpg';
import softwareImage12 from '../../assets/img/software/12.jpg';
import softwareImage13 from '../../assets/img/software/13.jpg';
import softwareImage14 from '../../assets/img/software/14.jpg';
import softwareImage15 from '../../assets/img/software/15.jpg';
import softwareImage16 from '../../assets/img/software/16.jpg';
import softwareImage17 from '../../assets/img/software/17.jpg';
import softwareImage18 from '../../assets/img/software/18.jpg';
import softwareImage19 from '../../assets/img/software/19.jpg';
import softwareImage20 from '../../assets/img/software/20.png';
import softwareImage21 from '../../assets/img/software/21.jpg';
import softwareImage22 from '../../assets/img/software/22.jpg';
import softwareImage23 from '../../assets/img/software/23.jpg';
import designImage1 from '../../assets/img/design/tuPoster1.jpg';
import designImage2 from '../../assets/img/design/tuPoster2.jpg';
import designImage3 from '../../assets/img/design/geniusPen.jpg';
import designImage4 from '../../assets/img/design/debate.jpg';
import designImageFull1 from '../../assets/img/design/tuPoster1_full.jpg';
import designImageFull2 from '../../assets/img/design/tuPoster2_full.jpg';
import designImageFull3 from '../../assets/img/design/geniusPen_full.jpg';
import designImageFull4 from '../../assets/img/design/debate_full.jpg';
import blockchainImage2 from '../../assets/img/blockchain/2.jpg';

class Work extends Component {
    state = {
        projectType: "",
        imageList: {
            software: [
                {
                    image: softwareImage22,
                    topic: 'Portfolio',
                    technologies: 'React.js',
                    link: 'phurinaix.github.io',
                    github: 'github.com/phurinaix/profile',
                    description: 'Portfolio website'
                },
                {
                    image: softwareImage11,
                    topic: 'Room Secret Chat',
                    technologies: 'Node.js + Express + Socket.io + HTML/CSS/JS',
                    link: 'shrouded-waters-54693.herokuapp.com',
                    github: 'github.com/phurinaix/Room-Secret-Chat',
                    description: 'Web chat application'
                },
                {
                    image: softwareImage1,
                    topic: 'Thammasat University Website',
                    technologies: 'PHP + MySQL + HTML/CSS/JS',
                    link: '',
                    github: 'github.com',
                    description: 'Thammasat University website'
                },
                {
                    image: softwareImage5,
                    topic: 'The Million Years Stone Park',
                    technologies: 'PHP + MySQL + HTML/CSS/JS',
                    link: '',
                    github: 'github.com/peterparkers/transportation-and-parking',
                    description: 'The Million Years Stone Park'
                },
                {
                    image: softwareImage21,
                    topic: 'Dev Me Please',
                    technologies: 'Java + Socket + MySQL',
                    link: '',
                    github: 'github.com/phurinaix/devMePlease-java',
                    description: 'Java desktop application'
                },
                {
                    image: softwareImage23,
                    topic: 'Folder Locked',
                    technologies: 'PHP + MySQL + HTML/CSS/JS',
                    link: '',
                    github: 'github.com/phpinproject/piyaproject',
                    description: 'Website for keep files'
                },
                {
                    image: softwareImage15,
                    topic: 'Pattaya Food',
                    technologies: 'Pure HTML/CSS/JS',
                    link: '',
                    github: 'github.com/phurinaix/pattaya-food',
                    description: 'Pattaya Food Restaurant & Bar'
                },
                {
                    image: softwareImage20,
                    topic: 'Cube trainer',
                    technologies: 'Swift',
                    link: '',
                    github: 'github.com/phurinaix/Cubetrainer',
                    description: 'Mobile application for IOS'
                }
            ],
            design: [
                {
                    image: designImage1,
                    imageFull: designImageFull1,
                    topic: 'Thammasat University Poster',
                    description: 'Thammasat University Pattaya Campus poster'
                },
                {
                    image: designImage2,
                    imageFull: designImageFull2,
                    topic: 'Thammasat University Poster',
                    description: 'Thammasat University Pattaya Campus poster'
                },
                {
                    image: designImage3,
                    imageFull: designImageFull3,
                    topic: 'Advertisement Poster',
                    description: 'The poster for advertise a genius pen'
                },
                {
                    image: designImage4,
                    imageFull: designImageFull4,
                    topic: 'Debating Poster',
                    description: 'The poster for debating activity'
                }
            ],
            blockchain: [
                {
                    image: blockchainImage2,
                    topic: 'A secure and trusted publishing systems for university diplomas and transcripts',
                    description: 'Graduation project'
                }
            ]
        }
    }
    projectHandle = (projectType) => {
        this.setState({ projectType });
    }
    render() {
        const { isLoading } = this.props;
        return (
            <React.Fragment>
                {isLoading ? 
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
                                <ProjectBoard 
                                    projectType={this.state.projectType}
                                    images={this.state.imageList}
                                />
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default withLoading(Work);