import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer, Request } from './components';
import { IndexScreen, ContactsScreen, AboutScreen, Fof } from './Screens';
import ScrollToTop from './components/ScrollToTop';

import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import messages_en from './translations/en.json';
import messages_ru from './translations/ru.json';
addLocaleData([ ...locale_en, ...locale_ru ]);
const messages = {
  ru: messages_ru,
  en: messages_en
};
const language = 'ru';
class App extends Component {
  render() {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
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
      </IntlProvider>
    );
  }
}

export default App;
