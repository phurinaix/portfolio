import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/style.css';

const ContactForm = () => {
    return (
        <Form className="col-md-10 col-lg-9 m-auto">
            <h3>CONTACT</h3>
            <p>If you have any question, Please contact using form below...</p>
            <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="6" placeholder="Message" />
            </Form.Group>
            <Button type="button">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;