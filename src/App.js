import React, { Component } from 'react';
import './styles/global.scss';
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
import LoadPage from './components/LoadPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

// const locale = require('react-redux-i18n').I18n;

class App extends Component {
  state = {
    isLoading: false
  }
  componentDidMount = () => {
    let loadingTime = 1500;
    let visited = sessionStorage.getItem('visited');
    if (visited !== 'true') {
      this.setState({
        isLoading: true
      });
      setTimeout(() => { 
        this.setState(prevState => ({
          isLoading: !prevState.isLoading,
        }));
        sessionStorage.setItem('visited', 'true');
      }, loadingTime);
    }
  }
  handleChangeLanguage = (l) => {
    if (this.props.l !== l) {
      this.props.setLang(l)
    }
  }
  render() {
    return (
      <React.Fragment>
          { this.state.isLoading ? 
            <LoadPage />
          :
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
              <a href="https://github.com/phurinaix" className="github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub }/></a>
              <a href="https://stackoverflow.com/users/12040768/phurinat-puekkham" className="stackoverflow" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faStackOverflow }/></a> 
              <a href="https://www.linkedin.com/in/phurinat-puekkham-333a9615a/" className="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn }/></a>
              <a href="https://medium.com/@phurinatz" className="medium" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faMedium }/></a>
            </div>
          </React.Fragment>
          }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  l: state.i18n.locale
})

export default connect(mapStateToProps, { setLang })(App);