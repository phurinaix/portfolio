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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const locale = require('react-redux-i18n').I18n;

class Contact extends Component {
    state = {
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

    render() {
        return (
            <div className="contact-section text-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ContactForm
                            topic={locale.t('contact.topic')}
                            description={locale.t('contact.description')}
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