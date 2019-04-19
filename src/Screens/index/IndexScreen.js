import React, { Component } from 'react';
import { SliderMain } from './components';

class IndexScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.history.listen((location, action) => {
  //     console.log(location, action);
  //   });
  // }
  render() {
    return (
      <div>
        <SliderMain />
        <h1>indexScreen</h1>
      </div>
    );
  }
}

export { IndexScreen };
