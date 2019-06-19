import React from 'react';
import { Card } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";
import ProgressiveImage from './ProgressiveImage';


const WorkCard = (props) => {
    return (
        // <LinkContainer to="/profile">
            <Card className="workcard col-md-3 m-4 p-0" onClick={() => props.click(props.title)}>
                <ProgressiveImage image={props.image} alt="projects" classStyle="w-100"/>
                <Card.Body>
                    <Card.Title className="workcard-title">{props.title}</Card.Title>
                    <Card.Text className="workcard-text">{props.text}</Card.Text>
                </Card.Body>
            </Card>
        // </LinkContainer>
    );
}

export default WorkCard;