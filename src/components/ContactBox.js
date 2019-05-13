import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/style.css';

const ContactBox = (props) => {
    return (
        <Card className="col-5 col-md-9 col-lg-6 mx-auto my-3 p-0">
            <Card.Img variant="top" className="w-100" src={props.qrcode} />
            <Card.Body className="p-0">
                <img src={props.logo} alt=""/>
                <Card.Title className="contactBox-title">{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ContactBox;