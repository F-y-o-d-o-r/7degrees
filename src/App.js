import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Slider } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Slider} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
