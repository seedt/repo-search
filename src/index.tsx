import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const token = process.env.REACT_APP_GITHUB_TOKEN;

ReactDOM.render(
  <App githubToken={token} />,
  document.getElementById('root'),
);
