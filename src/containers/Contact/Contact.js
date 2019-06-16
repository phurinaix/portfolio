import React, { Component } from 'react';
import withLoading from '../withLoading';
import ContactForm from '../../components/ContactForm';
import ContactBox from '../../components/ContactBox';
import FacebookCode from '../../assets/img/qrcode/facebook.png';
import LinkedinCode from '../../assets/img/qrcode/linkedin.png';
import GithubCode from '../../assets/img/qrcode/github.png';
// import FacebookLogo from '../../assets/img/icon/facebook.svg';
import LinkedinLogo from '../../assets/img/icon/linkedin.svg';
import GithubLogo from '../../assets/img/icon/github.svg';

import '../Home/Home.css';
import '../../styles/style.css';

class Contact extends Component {
    state = {
        socials: [
            // { 
            //     name: 'Facebook',
            //     link: 'https://www.facebook.com/phurinat.puekkham.1',
            //     qrcode: FacebookCode,
            //     logo: FacebookLogo
            // },
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
                        <ContactForm />
                    </div>
                    <div className="col-md-4">
                        {this.state.socials.map((social, index) => {
                            return <a href={social.link} target="_blank" key={index}><ContactBox qrcode={social.qrcode} title={social.name} logo={social.logo} /></a>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default withLoading(Contact);