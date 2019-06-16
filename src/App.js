import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';
import ErrorPage from './containers/ErrorPage/ErrorPage';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <BrowserRouter>
            <Navigation />
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
            {/* <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>  */}
            <a href="https://www.facebook.com/phurinat.puekkham.1" className="facebook" target="_blank"><FontAwesomeIcon icon={ faFacebookF }/></a>
            <a href="https://github.com/phurinaix" className="github" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a> 
            {/* <a href="#" className="google" target="_blank"><FontAwesomeIcon icon={ faGooglePlus }/></a>  */}
            <a href="https://www.linkedin.com/in/phurinat-puekkham-333a9615a/" className="linkedin" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn }/></a>
            {/* <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> */}
          </div>
          {/* <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div> */}
      </React.Fragment>
    );
  }
}

export default App;
