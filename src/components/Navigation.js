import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container>
                <LinkContainer to="/" activeClassName="" exact={true}>
                    <Nav.Link className="navbar-logo">PHURINAT</Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle-button"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center navbar-link">
                        <LinkContainer to="/" activeClassName="active-link" exact={true}><Nav.Link>HOME</Nav.Link></LinkContainer>
                        <LinkContainer to="/about" activeClassName="active-link"><Nav.Link>ABOUT</Nav.Link></LinkContainer>
                        <LinkContainer to="/skills" activeClassName="active-link"><Nav.Link>SKILLS</Nav.Link></LinkContainer>
                        <LinkContainer to="/portfolio" activeClassName="active-link"><Nav.Link>PORTFOLIO</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact" activeClassName="active-link"><Nav.Link>CONTACT</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;