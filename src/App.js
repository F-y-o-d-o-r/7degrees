import React, { Component } from 'react';
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
          {/* ?todo */}
          {/* <Route component={NotFound} />  */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
