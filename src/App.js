import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer, Request, Boorger } from './components';
import { IndexScreen, ContactsScreen, AboutScreen, Fof } from './Screens';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import messages_en from './translations/en.json';
import messages_ru from './translations/ru.json';
addLocaleData([ ...locale_en, ...locale_ru ]);
const messages = {
  EN: messages_ru,
  RU: messages_en
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN'
    };
  }
  _switchLanguage = (lang) => {
    this.setState({ language: lang });
  };
  render() {
    let { language } = this.state;
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
          <ScrollToTop>
            <Header switch={this._switchLanguage} language={language} />
            <Switch>
              <Route path="/" exact component={IndexScreen} />
              <Route path="/contacts" component={ContactsScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route component={Fof} />
            </Switch>
            <Request />
            <Boorger switch={this._switchLanguage} language={language} />
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
