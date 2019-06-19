import React from 'react';
import { connect } from 'react-redux';
// import { setLang } from '../actions/language-actions';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const locale = require('react-redux-i18n').I18n;

const Navigation = ({click}) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container>
                <LinkContainer to="/" activeClassName="" exact={true}>
                    <Nav.Link className="navbar-logo">PHURINAT</Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle-button"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-center navbar-link">
                        <LinkContainer to="/" activeClassName="active-link" exact={true}><Nav.Link>{locale.t('navigation.home')}</Nav.Link></LinkContainer>
                        <LinkContainer to="/about" activeClassName="active-link"><Nav.Link>{locale.t('navigation.about')}</Nav.Link></LinkContainer>
                        <LinkContainer to="/skills" activeClassName="active-link"><Nav.Link>{locale.t('navigation.skills')}</Nav.Link></LinkContainer>
                        <LinkContainer to="/portfolio" activeClassName="active-link"><Nav.Link>{locale.t('navigation.portfolio')}</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact" activeClassName="active-link"><Nav.Link>{locale.t('navigation.contact')}</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav className="ml-auto text-center navbar-link">
                        <Nav.Link onClick={() => click('th')}>TH</Nav.Link>
                        <Nav.Link onClick={() => click('en')}>EN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = state => ({
    l: state.i18n.locale
  })
export default connect(mapStateToProps)(Navigation);