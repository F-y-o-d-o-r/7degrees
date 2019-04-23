import React, { Component } from 'react';
import { Header, Directions, Technologies, Clients } from './components';

class AboutScreen extends Component {
  render() {
    return (
      <section className="screen-about">
        <Header />
        <Directions />
        <Technologies />
        <Clients />
      </section>
    );
  }
}

export { AboutScreen };
