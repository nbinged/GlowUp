import React from 'react';
import { hot } from 'react-hot-loader';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Register from './components/register/register';
import Login from './components/login/login';

class App extends React.Component {

  render() {
    return (
        <div>

          <Router>

            {/*<Register />*/}
            {/*<Login />*/}

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

          </Router>

        </div>
    );
  }
}

export default hot(module)(App);