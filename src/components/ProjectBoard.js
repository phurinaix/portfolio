import React, {Component} from 'react';
// import ProgressiveImage from 'react-progressive-image';
import ProgressiveImage from './ProgressiveImage';
import { Lightbox } from "react-modal-image";

class ProjectBoard extends Component {
    state = {
        open: false,
        currentImage: null
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
    render() {
        const { projectType, images } = this.props;
        if (projectType.toLowerCase() === 'software project') {
            return (
                <div className="project-container mb-5 w-95">
                    <div className="project-board software-project-content w-100 p-5">
                        <h3>{projectType}</h3>
                        {images.software.map((element,index) => {
                            return (
                                <div className="row project-card my-3 p-4" key={index}>
                                    <div className="col-md-5 project-card-image">
                                        <ProgressiveImage image={element.image} alt="projects" classStyle="w-100"/>
                                    </div>
                                    <div className="col-md-7 p-3 project-topic-content software-project-topic">
                                        <h5 className="text-center">{element.topic}</h5>
                                        <h6><strong>Technologies:</strong> {element.technologies}</h6>
                                        {element.link && <h6><strong>Link:</strong> <a href={`https://${element.link}`} target="_blank">{element.link}</a></h6>}
                                        <h6><strong>Github:</strong> <a href={`https://${element.github}`} target="_blank">{element.github}</a></h6>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                            )
                        })}
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
                    <div className="project-board w-100 p-5">
                        <h3>{projectType}</h3>
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
            );
        } else if (projectType.toLowerCase() === 'blockchain project') {
            return (
                <div className="project-container mb-5">
                    <div className="project-board w-100 p-5">
                        <h3>{projectType}</h3>
                        {images.blockchain.map((element,index) => {
                            return (
                                <div className="row project-card my-3 p-4" key={index}>
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
                            )
                        })}
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default ProjectBoard;