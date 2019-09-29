import React from 'react';
import { hot } from 'react-hot-loader';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Register from './components/register/register';
import Login from './components/login/login';

class App extends React.Component {

  render() {
    return (
        <div>

          {/*<Router>*/}

          {/*  <Switch>*/}
          {/*      /!*<Route path="/" exact component={Home} />*!/*/}
          {/*      <Route path="/login" component={Login} />*/}
          {/*      <Route path="/register" component={Register} />*/}
          {/*  </Switch>*/}

          {/*</Router>*/}

        </div>
    );
  }
}

export default hot(module)(App);