import React, { Component } from 'react';
import { SliderMain, Projects, Archive } from './components';

class IndexScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.history.listen((location, action) => {
  //     console.log(location, action);
  //   });
  // }
  render() {
    return (
      <>
        <SliderMain />
        <Projects />
        <Archive />
      </>
    );
  }
}

export { IndexScreen };
