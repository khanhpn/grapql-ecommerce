import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import Navbar from './components/Navbar';
import App from './components/App';
import Checkout from './components/Checkout';
import Signin from './components/Signin';
import Signup from './components/Signup';

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/"></Route>
        <Route component={Signin} path="/signin"></Route>
        <Route component={Signup} path="/signup"></Route>
        <Route component={Checkout} path="/checkout"></Route>
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if(module.hot) {
  module.hot.accept();
}