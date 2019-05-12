import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Error from './components/Error';
import Layout from './components/Layout';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Navigation />
          <Layout>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route component={Error} />
          </Switch>
          </Layout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
