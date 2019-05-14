import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactBox from '../../components/ContactBox';
import FacebookCode from '../../assets/img/qrcode/facebook.png';
import LinkedinCode from '../../assets/img/qrcode/linkedin.png';
// import GithubCode from '../../assets/img/qrcode/github.png';
import FacebookLogo from '../../assets/img/icon/facebook.svg';
import LinkedinLogo from '../../assets/img/icon/linkedin.svg';
// import GithubLogo from '../../assets/img/icon/github.svg';

import '../Home/Home.css';
import '../../styles/style.css';

class Contact extends Component {
    state = {
        isLoading: true,
        socials: [
            { name: 'Facebook', qrcode: FacebookCode, logo: FacebookLogo },
            { name: 'Linkedin', qrcode: LinkedinCode, logo: LinkedinLogo }
            // { name: 'Github', qrcode: GithubCode, logo: GithubLogo },
        ]
    }
    componentDidMount () {
        setTimeout(() => { 
            this.setState(prevState => ({
                isLoading: !prevState.isLoading,
            }));
        }, 1000);
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ? 
                    <div className="loading-bar">
                        <p className="loading-text">LOADING ...</p>
                        <div className="progress progress-striped">
                            <div className="progress-bar" >
                            </div>                       
                        </div> 
                    </div>
                : 
                    <div className="contact-section text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <ContactForm />
                            </div>
                            <div className="col-md-4">
                                {this.state.socials.map((social, index) => {
                                    return <ContactBox key={index} qrcode={social.qrcode} title={social.name} logo={social.logo} />
                                })}
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Contact;