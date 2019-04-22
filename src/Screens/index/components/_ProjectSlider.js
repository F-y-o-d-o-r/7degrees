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
      autoplay: true,
      dots: false,
      arrows: false,
      adaptiveHeight: true
      // infinite: true,
      // speed: 500,
      // autoplaySpeed: 5000,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // fade: true,
      // adaptiveHeight: true,
      // pauseOnHover: false
    };
    return (
      <div className="product-slider-wrapper">
        <Slider {...settings}>
          {imgs ? imgs.map((img) => <img key={img} src={'img/projects/' + img} alt="slider" />) : null}
        </Slider>
      </div>
    );
  }
}
