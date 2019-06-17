import React from 'react';
import { Collapse, Carousel } from 'react-bootstrap';
import ProgressiveImage from './ProgressiveImage';

const ProjectDetail = (props) => {
    const { link, github, technologies, description, images } = props.data;
    return (
        <Collapse in={props.open}>
            <div id="example-collapse-text" className="project-detail">
                <div className="col-md-10 mx-auto p-3">
                    <h5>{description}</h5>
                    <Carousel>
                        {images.map((image, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <ProgressiveImage image={image} alt="projects" classStyle="w-100"/>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                    <div className="">
                        {link && <h5><strong>Link:</strong> <a href={`https://${link}`} target="_blank">{link}</a></h5>}
                        <h5><strong>Github:</strong> <a href={`https://${github}`} target="_blank">{github}</a></h5>
                        <h5><strong>Technologies</strong></h5>
                        {/* <p>Code technologies and skills I got involved while working on this project</p> */}
                        <ul>
                            {technologies.map((technology, index) => {
                                return (<li key={index}>{technology}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            
        </Collapse>
    );
}

export default ProjectDetail;