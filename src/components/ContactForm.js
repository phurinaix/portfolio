import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = (props) => {
    const { topic, description, fName, fEmail, fSubject, fMessage, fSubmit } = props;
    return (
        <Form className="col-md-10 col-lg-9 m-auto">
            <h3>{topic}</h3>
            <p>{description}</p>
            <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder={fName} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder={fEmail} />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
                <Form.Control type="text" placeholder={fSubject} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="6" placeholder={fMessage} />
            </Form.Group>
            <Button type="button">
                {fSubmit}
            </Button>
        </Form>
    );
}

export default ContactForm;