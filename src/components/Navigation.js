import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="navbar-logo">PHURINAT</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-button"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center link">
                        <LinkContainer to="/"><Nav.Link>HOME</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>ABOUT</Nav.Link></LinkContainer>
                        <LinkContainer to="/skills"><Nav.Link>SKILLS</Nav.Link></LinkContainer>
                        <LinkContainer to="/portfolio"><Nav.Link>PORTFOLIO</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link>CONTACT</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav className="text-center link social-contact">
                        {/* <Nav.Link href="https://www.facebook.com/phurinat.puekkham.1" target="_blank"><FontAwesomeIcon icon={ faFacebookF }/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/phurinat-puekkham-333a9615a/" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn }/></Nav.Link>
                        <Nav.Link href="https://github.com/phurinaix" target="_blank"><FontAwesomeIcon icon={ faGithub }/></Nav.Link> */}
                        {/* <Nav.Link>THAI</Nav.Link>
                        <Nav.Link>ENGLISH</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;