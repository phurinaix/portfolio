import React, { Component } from 'react';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactBox from '../components/ContactBox';
import LinkedinCode from '../assets/img/qrcode/linkedin.png';
import GithubCode from '../assets/img/qrcode/github.png';
// import FacebookLogo from '../../assets/img/icon/facebook.svg';
import LinkedinLogo from '../assets/img/icon/linkedin.svg';
import GithubLogo from '../assets/img/icon/github.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const locale = require('react-redux-i18n').I18n;

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: '',
        expired: false,
        fetching: false,
        socials: [
            { 
                name: 'Github',
                link: 'https://github.com/phurinaix',
                qrcode: GithubCode,
                logo: GithubLogo
            },
            { 
                name: 'Linkedin',
                link: 'https://www.linkedin.com/in/phurinat-puekkham-333a9615a/',
                qrcode: LinkedinCode,
                logo: LinkedinLogo
            }
        ]
    }
    _reCaptchaRef = React.createRef();
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    recaptchaChangeHandler = (value) => {
        console.log("Captcha value:", value);
        this.setState({ recaptcha: value });
        // if value is null recaptcha expired
        if (value === null) 
        this.setState({
            expired: "true" 
        });
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
                    this.setState({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
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
        return (
            <div className="contact-section text-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ContactForm
                            topic={locale.t('contact.topic')}
                            description={locale.t('contact.description')}
                            change={this.onChangeHandler}
                            submit={this.onSubmitHandler}
                            name={this.state.name}
                            email={this.state.email}
                            subject={this.state.subject}
                            message={this.state.message}
                            ref={this._reCaptchaRef}
                            recaptchatChange={this.recaptchaChangeHandler}
                            fetching={this.state.fetching}
                            fName={locale.t('contact.form.name')}
                            fEmail={locale.t('contact.form.email')}
                            fSubject={locale.t('contact.form.subject')}
                            fMessage={locale.t('contact.form.message')}
                            fSubmit={locale.t('contact.form.submit')}
                        />
                    </div>
                    <ToastContainer autoClose={5000} hideProgressBar/>
                    <div className="col-md-4">
                        {this.state.socials.map((social, index) => {
                            return <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}><ContactBox qrcode={social.qrcode} title={social.name} logo={social.logo} /></a>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(withLoading(Contact));