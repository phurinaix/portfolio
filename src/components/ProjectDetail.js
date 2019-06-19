import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Carousel } from 'react-bootstrap';
import ProgressiveImage from './ProgressiveImage';

const locale = require('react-redux-i18n').I18n;

const ProjectDetail = (props) => {
    const { link, github, technologies, description, detail } = props.data;
    const { images } = props;
    const technologiesList = Object.values(technologies);
    return (
        <Collapse in={props.open}>
            <div id="example-collapse-text">
                <div className="col-md-10 mx-auto p-3 project-detail">
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
                    <div className="project-detail-content">
                        {link && <h5><strong>Link:</strong> <a href={`https://${link}`} target="_blank">{link}</a></h5>}
                        <h5><strong>Github:</strong> <a href={`https://${github}`} target="_blank">{github}</a></h5>
                        <h5><strong>{locale.t('portfolio.aboutProject')}:</strong></h5>
                        <p>{detail}</p>
                        <h5><strong>{locale.t('portfolio.technologies')}</strong></h5>
                        {/* <p>Code technologies and skills I got involved while working on this project</p> */}
                        <ul>
                            {technologiesList.map((technology, index) => {
                                return (<li key={index}>{technology}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            
        </Collapse>
    );
}

export default connect()(ProjectDetail);