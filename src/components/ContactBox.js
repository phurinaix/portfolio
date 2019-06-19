import React from 'react';
import { Card } from 'react-bootstrap';
import ProgressiveImage from './ProgressiveImage';

const ContactBox = (props) => {
    return (
        <Card className="col-5 col-md-9 col-lg-6 mx-auto my-3 p-0 contact-card-social">
            {/* <Card.Img variant="top" className="w-100" src={props.qrcode} /> */}
            <ProgressiveImage image={props.qrcode} alt="socials" classStyle="w-100"/>
            <Card.Body className="p-0">
                <ProgressiveImage image={props.logo} alt="socials" />
                <Card.Title className="contactBox-title">{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ContactBox;