import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../../css/App.css';

import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Music from '../pages/Music';
import Visual from '../pages/Visual';
import Web from '../pages/Web';
import ErrorPage from '../pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path="/" component={Nav} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/visual" component={Visual} />
            <Route exact path="/web" component={Web} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
