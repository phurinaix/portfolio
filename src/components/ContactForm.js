import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = (props) => {
    const { topic, description, fName, fEmail, fSubject, fMessage, fSubmit } = props;
    return (
        <Form className="col-md-10 col-lg-9 m-auto" onSubmit={props.submit}>
            <h3>{topic}</h3>
            <p>{description}</p>
            <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder={fName} name="name" value={props.name} onChange={props.change} required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder={fEmail} name="email" value={props.email} onChange={props.change} required/>
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
                <Form.Control type="text" placeholder={fSubject} name="subject" value={props.subject} onChange={props.change} required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="6" placeholder={fMessage} name="message" value={props.message} onChange={props.change} required/>
            </Form.Group>
            <ReCAPTCHA
                ref={props._reCaptchaRef}
                sitekey="6LeS0qkUAAAAAIHVnVo2kX4OVgJudz24g8HyqhAV"
                onChange={props.recaptchatChange}
                // asyncScriptOnLoad={props.asyncScriptOnLoad}
            />
            {props.fetching && <Spinner animation="border" />}
            <Button type="submit" disabled={props.fetching}>
                {fSubmit}
            </Button>
        </Form>
    );
}

export default ContactForm;