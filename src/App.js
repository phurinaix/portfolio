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
            <Route path="/profile/" component={Home} exact/>
            <Route path="/profile/about" component={About} />
            <Route path="/profile/skills" component={Skills} />
            <Route path="/profile/work" component={Work} />
            <Route component={Error} />
          </Switch>
          </Layout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
