import React from 'react';
import { Card } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";
import ProgressiveImage from './ProgressiveImage';
import { LinkContainer } from "react-router-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


const WorkCard = (props) => {
    return (
        // <LinkContainer to="/profile">
            <Card className="workcard col-md-3 m-4 p-0">
                <ProgressiveImage image={props.image} alt="projects" classStyle="w-100"/>
                <Card.Body>
                    <Card.Title className="workcard-title">{props.title}</Card.Title>
                    <Card.Text className="workcard-text">{props.text}</Card.Text>
                    <br/>
                    <div onClick={() => props.click(props.title)}>
                        <AwesomeButton type="primary" ripple={true}>
                            <strong>{props.detail}</strong>
                        </AwesomeButton>
                    </div>
                </Card.Body>
            </Card>
        // </LinkContainer>
    );
}

export default WorkCard;