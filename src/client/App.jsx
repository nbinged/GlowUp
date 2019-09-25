import React from 'react';
import { hot } from 'react-hot-loader';
import Register from './components/register/register';

class App extends React.Component {

  render() {
    return (
      <div>

        <Register />

      </div>
    );
  }
}

export default hot(module)(App);