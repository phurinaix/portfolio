import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = (props) => {
    return (
            <Card className="workcard col-md-3 m-4 p-0">
                <Card.Img variant="top" className="w-100" src={props.image} />
                <Card.Body>
                    <Card.Title className="workcard-title">{props.title}</Card.Title>
                    <Card.Text className="workcard-text">{props.text}</Card.Text>
                </Card.Body>
            </Card>
    );
}

export default ProjectCard;