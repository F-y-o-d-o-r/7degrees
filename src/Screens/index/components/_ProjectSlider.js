import React, { Component } from 'react';
import Slider from 'react-slick';

export default class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: props.imgs
    };
  }
  render() {
    let { imgs } = this.state;
    // https://react-slick.neostack.com/docs/api
    var settings = {
      autoplay: false,
      dots: true,
      arrows: true
    };
    return (
      <div className="product-slider-wrapper">
        <Slider {...settings}>
          {imgs ? (
            imgs.map((img) => (
              <div key={img}>
                <div className="img" style={{ backgroundImage: 'url("img/projects/' + img + '")' }} />
              </div>
            ))
          ) : null}
        </Slider>
      </div>
    );
  }
}
