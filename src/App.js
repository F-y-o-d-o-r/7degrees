import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components';
import { IndexScreen, ContactsScreen, AboutScreen } from './Screens';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={IndexScreen} />
          <Route path="/contacts" component={ContactsScreen} />
          <Route path="/about" component={AboutScreen} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
