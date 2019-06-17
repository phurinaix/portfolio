import React, {Component} from 'react';
import ProgressiveImage from './ProgressiveImage';
import ProjectDetail from './ProjectDetail';
import BlockchainProjectDetail from './BlockchainProjectDetail';
import { Lightbox } from "react-modal-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class ProjectBoard extends Component {
    state = {
        open: false,
        currentImage: null,
        eventKeySoftware: [false, false, false, false, false, false, false, false],
        eventKeyBlockchain: [false]
    }
    closeLightbox = () => {
        this.setState({
            open: false 
        });
    };
    openLightbox = (image) => {
        this.setState({ 
            open: true,
            currentImage: image
        });
    }
    softwareToggleHandler = (id) => {
        let eventKeySoftware = [...this.state.eventKeySoftware];
        eventKeySoftware[id] = !eventKeySoftware[id];
        this.setState({ eventKeySoftware });
        // () => this.setState({ eventKeySoftware[element.id - 1]: !key })
    }
    blockchainToggleHandler = (id) => {
        let eventKeyBlockchain = [...this.state.eventKeyBlockchain];
        eventKeyBlockchain[id] = !eventKeyBlockchain[id];
        this.setState({ eventKeyBlockchain });
    }
    render() {
        const { projectType, images } = this.props;
        if (projectType.toLowerCase() === 'software project') {
            return (
                <div className="project-container mb-5 w-95">
                    <div className="project-board software-project-content w-100">
                        <div className="project-header py-3">
                            <div className="back-btn" onClick={this.props.back}>
                                <FontAwesomeIcon icon={ faAngleLeft }/>
                            </div>
                            <h3>{projectType}</h3>
                        </div>
                        {/* <div className="px-5 pb-5 row justify-content-center"> */}
                        <div className="px-5 pb-5 project-body">
                            {images.software.map((element,index) => {
                                return (
                                    <div className="project-card software-project-card" key={index}>
                                    {/* // <div className="project-card col-lg-3 col-md-5 m-4 p-0" key={index}> */}
                                        <div className="row my-3 px-4 pt-4">
                                            <div className="col-md-5 project-card-image">
                                                <ProgressiveImage image={element.previewImage} alt="projects" classStyle="w-100"/>
                                            </div>
                                            <div className="col-md-7 p-3 project-topic-content software-project-topic">
                                                <div className="m-auto">
                                                    <h5 className="text-center">{element.topic}</h5>
                                                    <p>{element.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="border py-3 toggle-btn" 
                                            onClick={() => this.softwareToggleHandler(element.id - 1)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={this.state.eventKeySoftware[element.id - 1]}
                                        >
                                            <h6>MORE DETAIL</h6>
                                        </div>
                                        <ProjectDetail 
                                            open={this.state.eventKeySoftware[element.id - 1]}
                                            data={element}
                                        />
                                        {/* <div className="">
                                            <div className="project-card-image">
                                                <ProgressiveImage image={element.previewImage} alt="projects" classStyle="w-100"/>
                                            </div>
                                            <div className="project-topic-content software-project-topic p-2">
                                                <div className="m-auto">
                                                    <h5>{element.topic}</h5>
                                                    <p>{element.description}</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        } else if (projectType.toLowerCase() === 'design project') {
            return (
                <div className="project-container mb-5">
                    {
                        this.state.open && 
                        <Lightbox
                            medium={this.state.currentImage}
                            large={this.state.currentImage}
                            onClose={this.closeLightbox}
                        />
                    }
                    <div className="project-board w-100">
                        <div className="project-header py-3">
                            <div className="back-btn" onClick={this.props.back}>
                                <FontAwesomeIcon icon={ faAngleLeft }/>
                            </div>
                            <h3>{projectType}</h3>
                        </div>
                        <div className="px-5 pb-5">
                            {images.design.map((element,index) => {
                                return (
                                    <div className="row project-card my-3 p-4" key={index}>
                                        <div className="col-md-3 project-card-image-view project-card-image" onClick={() => this.openLightbox(element.imageFull)}>
                                            <ProgressiveImage image={element.image} alt="projects" classStyle="w-100"/>
                                        </div>
                                        <div className="col-md-9 p-3 project-topic-content">
                                            <div className="m-auto">
                                                <h5>{element.topic}</h5>
                                                <p>{element.description}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        } else if (projectType.toLowerCase() === 'blockchain project') {
            return (
                <div className="project-container mb-5">
                    <div className="project-board w-100">
                        <div className="project-header py-3">
                            <div className="back-btn" onClick={this.props.back}>
                                <FontAwesomeIcon icon={ faAngleLeft }/>
                            </div>
                            <h3>{projectType}</h3>
                        </div>
                        <div className="px-5 pb-5 project-body">
                            {images.blockchain.map((element,index) => {
                                return (
                                    <div className="project-card blockchain-project-card" key={index}>
                                        <div className="row my-3 px-4 pt-4">
                                            <div className="col-md-3 project-card-image">
                                                <ProgressiveImage image={element.image} alt="projects" classStyle="w-100"/>
                                            </div>
                                            <div className="col-md-9 p-3 project-topic-content">
                                                <div className="m-auto">
                                                    <h5>{element.topic}</h5>
                                                    <p>{element.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="border py-3 toggle-btn" 
                                            onClick={() => this.blockchainToggleHandler(element.id - 1)}
                                            aria-controls="blockchain-collapse"
                                            aria-expanded={this.state.eventKeyBlockchain[element.id - 1]}
                                        >
                                            <h6>MORE DETAIL</h6>
                                        </div>
                                        <BlockchainProjectDetail 
                                            open={this.state.eventKeyBlockchain[element.id - 1]}
                                            data={element}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default ProjectBoard;