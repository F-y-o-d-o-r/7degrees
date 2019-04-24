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
      <React.Fragment>
        <SliderMain />
        <Projects />
        <Archive />
      </React.Fragment>
    );
  }
}

export { IndexScreen };
