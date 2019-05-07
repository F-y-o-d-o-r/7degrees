import React, { Component } from 'react';
import { SliderMain, Projects, Archive } from './components';

class IndexScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SliderMain />
        <Projects />
        <Archive />
      </React.Fragment>
    );
  }
}

export { IndexScreen };
