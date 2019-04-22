import React, { Component } from 'react';
import ProjectSlider from './_ProjectSlider';

export default class _Project extends Component {
  render() {
    let { header, tags, images } = this.props.project;
    return (
      <div className="product-wrapper">
        {images.length <= 1 ? (
          <div className="img" style={{ backgroundImage: 'url(img/projects/' + images[0] + ')' }} />
        ) : (
          <ProjectSlider imgs={images} />
        )}
        <h6>{header}</h6>
        <div className="tag-wrapper">{tags.map((tag) => <span key={tag}>{tag} </span>)}</div>
      </div>
    );
  }
}
