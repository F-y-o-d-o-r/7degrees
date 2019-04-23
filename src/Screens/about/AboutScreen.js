import React, { Component } from 'react';
import { Header, Directions } from './components';

class AboutScreen extends Component {
  render() {
    return (
      <section className="screen-about">
        <Header />
        <Directions />
      </section>
    );
  }
}

export { AboutScreen };
