import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../../css/App.css';

import ScrollToTop from '../ScrollToTop';
import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Web from '../pages/Web';
import Music from '../pages/Music';
import Visual from '../pages/Visual';
import ErrorPage from '../pages/ErrorPage';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>

            <div className='App'>
              <Route path="/" component={Nav} />
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/web" component={Web} />
                <Route exact path="/visual" component={Visual} />

                <Route exact path='/djin' component={() => { window.location = 'https://yapjinai.github.io/djin'; return null;} }/>
                <Route exact path='/shrinelords' component={() => { window.location = 'https://shrinelords.herokuapp.com'; return null;} }/>
                <Route exact path='/forevernote' component={() => { window.location = 'https://windows-xp.herokuapp.com'; return null;} }/>

                <Route component={ErrorPage} />
              </Switch>
            </div>

          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
//
// class App extends Component {
//   render() {
//     return (
//       <Router basename={process.env.PUBLIC_URL}>
//         <ScrollToTop>
//           <Switch>
//
//             <Route exact path="/" component={Home} />
//
//             <div className='App'>
//               <Route path="/" component={Nav} />
//               <Switch>
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/web" component={Web} />
//                 <Route exact path="/music" component={Music} />
//                 <Route exact path="/visual" component={Visual} />
//                 <Route component={ErrorPage} />
//               </Switch>
//             </div>
//
//           </Switch>
//         </ScrollToTop>
//       </Router>
//     );
//   }
// }



export default App;
