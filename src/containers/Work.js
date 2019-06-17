import React, { Component } from 'react';
import WorkCard from '../components/WorkCard';
// import ProjectCard from '../../components/ProjectCard';
import withLoading from './withLoading';
import SoftwareImage from '../assets/img/software.jpg';
import DesignImage from '../assets/img/design.jpg';
import BlockchainImage from '../assets/img/blockchain.jpg';
import ProjectBoard from '../components/ProjectBoard';
import softwareImage1 from '../assets/img/software/1.jpg';
import softwareImage2 from '../assets/img/software/2.jpg';
import softwareImage3 from '../assets/img/software/3.jpg';
import softwareImage4 from '../assets/img/software/4.jpg';
import softwareImage6 from '../assets/img/software/6.jpg';
import softwareImage7 from '../assets/img/software/7.jpg';
import softwareImage8 from '../assets/img/software/8.jpg';
import softwareImage9 from '../assets/img/software/9.jpg';
import softwareImage10 from '../assets/img/software/10.jpg';
import softwareImage11 from '../assets/img/software/11.jpg';
import softwareImage12 from '../assets/img/software/12.jpg';
import softwareImage13 from '../assets/img/software/13.jpg';
import softwareImage14 from '../assets/img/software/14.jpg';
import softwareImage15 from '../assets/img/software/15.jpg';
import softwareImage16 from '../assets/img/software/16.jpg';
import softwareImage17 from '../assets/img/software/17.jpg';
import softwareImage18 from '../assets/img/software/18.jpg';
import softwareImage19 from '../assets/img/software/19.jpg';
import softwareImage20 from '../assets/img/software/20.png';
import softwareImage21 from '../assets/img/software/21.jpg';
import softwareImage22 from '../assets/img/software/22.jpg';
import softwareImage23 from '../assets/img/software/23.jpg';
import softwareImage24 from '../assets/img/software/24.jpg';
import softwareImage25 from '../assets/img/software/25.jpg';
import softwareImage26 from '../assets/img/software/26.jpg';
import softwareImage27 from '../assets/img/software/27.jpg';
import softwareImage28 from '../assets/img/software/28.jpg';
import softwareImage29 from '../assets/img/software/29.jpg';
import softwareImage30 from '../assets/img/software/30.jpg';
import softwareImage31 from '../assets/img/software/31.jpg';
import softwareImage32 from '../assets/img/software/32.jpg';
import softwareImage33 from '../assets/img/software/33.jpg';
import softwareImage34 from '../assets/img/software/34.jpg';
import softwareImage35 from '../assets/img/software/35.jpg';
import softwareImage36 from '../assets/img/software/36.jpg';
import designImage1 from '../assets/img/design/tuPoster1.jpg';
import designImage2 from '../assets/img/design/tuPoster2.jpg';
import designImage3 from '../assets/img/design/geniusPen.jpg';
import designImage4 from '../assets/img/design/debate.jpg';
import designImageFull1 from '../assets/img/design/tuPoster1_full.jpg';
import designImageFull2 from '../assets/img/design/tuPoster2_full.jpg';
import designImageFull3 from '../assets/img/design/geniusPen_full.jpg';
import designImageFull4 from '../assets/img/design/debate_full.jpg';
import blockchainImage2 from '../assets/img/blockchain/2.jpg';
import blockchainImage1 from '../assets/img/blockchain/blockchain.jpg';

class Work extends Component {
    state = {
        projectType: "",
        imageList: {
            software: [
                {
                    id: 1,
                    previewImage: softwareImage22,
                    topic: 'Portfolio',
                    technologies: ['React.js', 'Javascript ES6', 'CSS3'],
                    link: 'phurinaix.github.io',
                    github: 'github.com/phurinaix/profile',
                    description: 'Portfolio website',
                    detail: 'The idea behind this project was to create a showcase of everything I\'ve worked on and display the information about me',
                    images: [
                        softwareImage22, softwareImage25, softwareImage26, softwareImage27, softwareImage28, softwareImage29
                    ]
                },
                {
                    id: 2,
                    previewImage: softwareImage11,
                    topic: 'Room Secret Chat',
                    technologies: ['Node.js', 'Express', 'Socket.io', 'HTML5', 'CSS3', 'Javascript'],
                    link: 'room-secret-chat.herokuapp.com',
                    github: 'github.com/phurinaix/Room-Secret-Chat',
                    description: 'Web chat application',
                    detail: 'Web application for communicate with each other',
                    images: [
                        softwareImage11, softwareImage12, softwareImage13, softwareImage14
                    ]
                },
                {
                    id: 3,
                    previewImage: softwareImage1,
                    topic: 'Thammasat University Website',
                    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Javascript'],
                    link: '',
                    github: 'github.com/phurinaix/university-website',
                    description: 'Thammasat University website',
                    detail: '',
                    images: [
                        softwareImage1, softwareImage2, softwareImage3, softwareImage4
                    ]
                },
                {
                    id: 4,
                    previewImage: softwareImage24,
                    topic: 'The Million Years Stone Park',
                    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Javascript'],
                    link: '',
                    github: 'github.com/peterparkers/transportation-and-parking',
                    description: 'The Million Years Stone Park',
                    detail: '',
                    images: [
                        softwareImage24, softwareImage6, softwareImage7, softwareImage8, softwareImage9, softwareImage10
                    ]
                },
                {
                    id: 5,
                    previewImage: softwareImage21,
                    topic: 'Dev Me Please',
                    technologies: ['Java', 'Socket', 'MySQL'],
                    link: '',
                    github: 'github.com/phurinaix/devMePlease-java',
                    description: 'Java desktop application',
                    detail: '',
                    images: [
                        softwareImage21, softwareImage30, softwareImage31, softwareImage32
                    ]
                },
                {
                    id: 6,
                    previewImage: softwareImage23,
                    topic: 'Folder Locked',
                    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Javascript'],
                    link: '',
                    github: 'github.com/phpinproject/piyaproject',
                    description: 'Website for keep files',
                    detail: '',
                    images: [
                        softwareImage23, softwareImage33, softwareImage34, softwareImage35, softwareImage36
                    ]
                },
                {
                    id: 7,
                    previewImage: softwareImage15,
                    topic: 'Pattaya Food',
                    technologies: ['HTML5', 'CSS3', 'Javascript'],
                    link: '',
                    github: 'github.com/phurinaix/pattaya-food',
                    description: 'Pattaya Food Restaurant & Bar',
                    detail: 'This one is the first project that I was created (11 October 2016).',
                    images: [
                        softwareImage15, softwareImage16, softwareImage17, softwareImage18, softwareImage19
                    ]
                },
                {
                    id: 8,
                    previewImage: softwareImage20,
                    topic: 'Cube trainer',
                    technologies: ['Swift'],
                    link: '',
                    github: 'github.com/phurinaix/Cubetrainer',
                    description: 'Mobile application for IOS',
                    detail: '',
                    images: [
                        softwareImage20
                    ]
                }
            ],
            design: [
                {
                    id: 1,
                    image: designImage1,
                    imageFull: designImageFull1,
                    topic: 'Thammasat University Poster',
                    description: 'Thammasat University Pattaya Campus poster'
                },
                {
                    id: 2,
                    image: designImage2,
                    imageFull: designImageFull2,
                    topic: 'Thammasat University Poster',
                    description: 'Thammasat University Pattaya Campus poster'
                },
                {
                    id: 3,
                    image: designImage3,
                    imageFull: designImageFull3,
                    topic: 'Advertisement Poster',
                    description: 'The poster for advertise a genius pen'
                },
                {
                    id: 4,
                    image: designImage4,
                    imageFull: designImageFull4,
                    topic: 'Debating Poster',
                    description: 'The poster for debating activity'
                }
            ],
            blockchain: [
                {
                    id: 1,
                    image: blockchainImage1,
                    topic: 'A secure and trusted publishing systems for university diplomas and transcripts',
                    description: 'Graduation project'
                }
            ]
        }
    }
    projectHandle = (projectType) => {
        this.setState({ projectType });
    }
    deleteProjectType = () => {
        this.setState({ projectType: '' });
    }
    render() {
        return (
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
                                back={this.deleteProjectType}
                            />
                        }
                    </div>
                </div>
        );
    }
}

export default withLoading(Work);