import React, { Component } from 'react';

export default class _Project extends Component {
  render() {
    let { header, tags, images } = this.props.project;
    return (
      <div className="product-wrapper">
        {/*! todo slider*/}
        <div className="img" style={{ backgroundImage: 'url(img/projects/' + this.props.project.images[0] + ')' }} />
        <h6>{header}</h6>
        <div className="tag-wrapper">{tags.map((tag) => <span key={tag}>{tag} </span>)}</div>
      </div>
    );
  }
}
