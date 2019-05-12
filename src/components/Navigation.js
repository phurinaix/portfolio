import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faBrain, faTv } from '@fortawesome/free-solid-svg-icons';
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
                        <LinkContainer to="/profile/"><Nav.Link>HOME</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/about"><Nav.Link>ABOUT</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/skills"><Nav.Link>SKILLS</Nav.Link></LinkContainer>
                        <LinkContainer to="/profile/work"><Nav.Link>WORK</Nav.Link></LinkContainer>
                        {/* <FontAwesomeIcon icon={ faHome }/>
                        <FontAwesomeIcon icon={ faUser }/>
                        <FontAwesomeIcon icon={ faBrain }/>
                        <FontAwesomeIcon icon={ faTv }/> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;