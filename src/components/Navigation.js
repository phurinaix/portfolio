import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons"

import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container>
                <LinkContainer to="/profile/">
                    <Navbar.Brand className="navbar-logo">PHURINAT</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-button"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-center link">
                        <LinkContainer to="/profile/"><Nav.Link>HOME</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/about"><Nav.Link>ABOUT</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/skills"><Nav.Link>SKILLS</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/work"><Nav.Link>WORK</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/contact"><Nav.Link>CONTACT</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav className="text-center link social-contact">
                        <Nav.Link href="https://www.facebook.com/phurinat.puekkham.1" target="_blank"><FontAwesomeIcon icon={ faFacebookF }/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/phurinat-puekkham-333a9615a/" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn }/></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={ faGoogle }/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;