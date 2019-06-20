import React, { Component, Fragment } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
// import ReCAPTCHA from "react-google-recaptcha";
import Reaptcha from 'reaptcha';
import { toast } from 'react-toastify';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: '',
        expired: false,
        fetching: false
    }
    captchaRef = null;
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    recaptchaChangeHandler = (value) => {
        console.log("Captcha value:", value);
        this.setState({ recaptcha: value });
        // if value is null recaptcha expired
        if (value === null) {
            this.setState({
                expired: "true" 
            });
        }
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ fetching: true });
        if (!this.state.recaptcha) {
            this.setState({ fetching: false });
            toast.error("Please verify reCAPTCHA", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return false;
        }
        const data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        console.log(JSON.stringify(data));
        fetch('https://phurinat-portfolio-server.herokuapp.com/email', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                var status = result.status;
                this.setState({ fetching: false });
                if (status === "success") {
                    toast.success("Your e-mail has been successfully sent. Thank You!", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                    // this._reCaptchaRef.reset();
                    this.captchaRef.reset();
                    this.setState({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        recaptcha: ''
                    });
                } else if (status === "empty_error") {
                    toast.error("Form can not be empty", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                } else if (status === "email_error") {
                    toast.error("Please enter a valid email address", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                } else if (status === "spam") {
                    toast.error("Too many request created from this IP, please try again after 24 hours", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                    this.setState({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                } else if (status === "error") {
                    toast.error("Error", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }
            })
            .catch(e => {
                toast.error("Error", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
    render() {
        const { topic, description, fName, fEmail, fSubject, fMessage, fSubmit } = this.props;
        return (
            <Form className="col-md-10 col-lg-9 m-auto" onSubmit={this.onSubmitHandler}>
                <h3>{topic}</h3>
                <p>{description}</p>
                <br/>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder={fName} name="name" value={this.state.name} onChange={this.onChangeHandler} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder={fEmail} name="email" value={this.state.email} onChange={this.onChangeHandler} required/>
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control type="text" placeholder={fSubject} name="subject" value={this.state.subject} onChange={this.onChangeHandler} required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="6" placeholder={fMessage} name="message" value={this.state.message} onChange={this.onChangeHandler} required/>
                </Form.Group>
                {/* <ReCAPTCHA
                    ref={el => (this.props._reCaptchaRef = el)}
                    sitekey="6LeS0qkUAAAAAIHVnVo2kX4OVgJudz24g8HyqhAV"
                    onChange={this.props.recaptchatChange}
                /> */}
                <Reaptcha
                    ref={e => (this.captchaRef = e)}
                    sitekey="6LeS0qkUAAAAAIHVnVo2kX4OVgJudz24g8HyqhAV"
                    onVerify={this.recaptchaChangeHandler}
                />
                <br/>
                {this.state.fetching && <Fragment><Spinner animation="border" /><br/></Fragment>}
                <br/>
                <Button type="submit" disabled={this.state.fetching}>
                    {fSubmit}
                </Button>
            </Form>
        );
    }
}

export default ContactForm;