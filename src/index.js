import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/index.css';
import App from './components/containers/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Music from './components/pages/Music';
import Visual from './components/pages/Visual';
import Web from './components/pages/Web';
import ErrorPage from './components/pages/ErrorPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <>
      <Route path="/" component={App} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/visual" component={Visual} />
        <Route exact path="/web" component={Web} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
