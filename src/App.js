import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FormattedMessage
            id="app.title"
            defaultMessage="Welcome to {what}"
            description="привет 1"
            values={{ what: 'react-intl' }}
          />
          <FormattedHTMLMessage
            id="app.intro"
            defaultMessage="111111To get started, edit <code>src/App.js</code> and save to reload."
            description="Text on main page"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
