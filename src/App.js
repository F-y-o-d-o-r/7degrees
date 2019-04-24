import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer, Request } from './components';
import { IndexScreen, ContactsScreen, AboutScreen, Fof } from './Screens';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" exact component={IndexScreen} />
            <Route path="/contacts" component={ContactsScreen} />
            <Route path="/about" component={AboutScreen} />
            {/* ?todo */}
            <Route component={Fof} />
          </Switch>
          <Request />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
