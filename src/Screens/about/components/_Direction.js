import React, { Component } from 'react';

export default class Direction extends Component {
  render() {
    let { data } = this.props;
    return (
      <React.Fragment>
        {data ? (
          data.map((data) => (
            <div className="direction-wrapper" key={data.num}>
              <div className="direction-num">{data.num}</div>
              <div className="direction-header">{data.header}</div>
              <div className="direction-body">{data.body}</div>
            </div>
          ))
        ) : null}
      </React.Fragment>
    );
  }
}
