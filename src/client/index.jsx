import 'babel-polyfill';
import 'airbnb-browser-shims';
import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// global styles
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('app'));
