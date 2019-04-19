import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components';
import { IndexScreen, ContactsScreen, AboutScreen } from './Screens';

class App extends Component {
  constructor(props) {
    super(props);
    if (typeof Object.assign != 'function') {
      Object.assign = function(target) {
        'use strict';
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source != null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }
  }
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
