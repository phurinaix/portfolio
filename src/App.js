import React, { Component } from 'react';
import './App.css';
import './styles/style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { setLang } from './actions/language-actions';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Work from './containers/Work';
import Contact from './containers/Contact';
import ErrorPage from './containers/ErrorPage';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

// const locale = require('react-redux-i18n').I18n;

class App extends Component {

  handleChangeLanguage = (l) => {
    if (this.props.l !== l) {
      this.props.setLang(l)
    }
  }
  render() {
    return (
      <React.Fragment>
          <BrowserRouter>
            <Navigation click={this.handleChangeLanguage}/>
            <Layout>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/portfolio" component={Work} />
                  <Route path="/contact" component={Contact} />
                  <Route component={ErrorPage} />
              </Switch>
            </Layout>
          </BrowserRouter>
          <div className="icon-bar">
            <a href="https://www.facebook.com/phurinat.puekkham.1" className="facebook" target="_blank"><FontAwesomeIcon icon={ faFacebookF }/></a>
            <a href="https://github.com/phurinaix" className="github" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a> 
            <a href="https://www.linkedin.com/in/phurinat-puekkham-333a9615a/" className="linkedin" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn }/></a>
          </div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  l: state.i18n.locale
})

export default connect(mapStateToProps, { setLang })(App);