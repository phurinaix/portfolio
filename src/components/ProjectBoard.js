import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from './ProgressiveImage';
import ProjectDetail from './ProjectDetail';
import BlockchainProjectDetail from './BlockchainProjectDetail';
import { Lightbox } from "react-modal-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const locale = require('react-redux-i18n').I18n;

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
    }
    blockchainToggleHandler = (id) => {
        let eventKeyBlockchain = [...this.state.eventKeyBlockchain];
        eventKeyBlockchain[id] = !eventKeyBlockchain[id];
        this.setState({ eventKeyBlockchain });
    }
    render() {
        const { projectType, softwarePreviewImage, designPreviewImage, blockchainPreviewImage, softwareImages, designImages, projects, projectsDetailTopic } = this.props;
        const type = projectType.toLowerCase();
        if (type === 'software project' || type === "ด้านซอฟต์แวร์") {
            const projectList = Object.values(projects['software']);
            return (
                <div className="project-container mb-5 w-95">
                    <div className="project-board software-project-content w-100">
                        <div className="project-header py-3">
                            <div className="back-btn" onClick={this.props.back}>
                                <FontAwesomeIcon icon={ faAngleLeft }/>
                            </div>
                            <h1>{JSON.stringify(this.state.projects)}</h1>
                            <h3>{locale.t('portfolio.topic.project1')}</h3>
                        </div>
                        <div className="px-5 pb-5 project-body">
                            {projectList.map((element,index) => {
                                return (
                                    <div className="project-card software-project-card" key={index}>
                                        <div className="row my-3 px-4 pt-4">
                                            <div className="col-md-5 project-card-image">
                                                <ProgressiveImage image={softwarePreviewImage[index]} alt="projects" classStyle="w-100"/>
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
                                            onClick={() => this.softwareToggleHandler(parseInt(element.id) - 1)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={this.state.eventKeySoftware[parseInt(element.id) - 1]}
                                        >
                                            <h6>{locale.t('portfolio.moreDetail')}</h6>
                                        </div>
                                        <ProjectDetail 
                                            open={this.state.eventKeySoftware[parseInt(element.id) - 1]}
                                            data={element}
                                            topic={projectsDetailTopic}
                                            images={softwareImages[index].images}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        } else if (type === 'design project' || type === "ด้านการออกแบบ") {
            const projectList = Object.values(projects['design']);
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
                            <h3>{locale.t('portfolio.topic.project2')}</h3>
                        </div>
                        <div className="px-5 pb-5">
                            {projectList.map((element,index) => {
                                return (
                                    <div className="row project-card my-3 p-4" key={index}>
                                        <div className="col-md-3 project-card-image-view project-card-image" onClick={() => this.openLightbox(designImages[index].image)}>
                                            <ProgressiveImage image={designPreviewImage[index]} alt="projects" classStyle="w-100"/>
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
        } else if (type === 'blockchain project' || type === "ด้านบล็อกเช็น") {
            const projectList = Object.values(projects['blockchain']);
            return (
                <div className="project-container mb-5">
                    <div className="project-board w-100">
                        <div className="project-header py-3">
                            <div className="back-btn" onClick={this.props.back}>
                                <FontAwesomeIcon icon={ faAngleLeft }/>
                            </div>
                            <h3>{locale.t('portfolio.topic.project3')}</h3>
                        </div>
                        <div className="px-5 pb-5 project-body">
                            {projectList.map((element,index) => {
                                return (
                                    <div className="project-card blockchain-project-card" key={index}>
                                        <div className="row my-3 px-4 pt-4">
                                            <div className="col-md-3 project-card-image">
                                                <ProgressiveImage image={blockchainPreviewImage[index]} alt="projects" classStyle="w-100"/>
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
                                            onClick={() => this.blockchainToggleHandler(parseInt(element.id) - 1)}
                                            aria-controls="blockchain-collapse"
                                            aria-expanded={this.state.eventKeyBlockchain[parseInt(element.id) - 1]}
                                        >
                                            <h6>{locale.t('portfolio.moreDetail')}</h6>
                                        </div>
                                        <BlockchainProjectDetail 
                                            open={this.state.eventKeyBlockchain[parseInt(element.id) - 1]}
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

export default connect()(ProjectBoard);