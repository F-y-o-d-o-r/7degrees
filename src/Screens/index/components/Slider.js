import React, { Component } from 'react';
import Slider from 'react-slick';

import one from '../../../img/slider/one.jpg';
import two from '../../../img/slider/two.jpg';
import three from '../../../img/slider/three.jpg';

class SliderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0
    };
    // START for ie
    if (typeof Object.assign != 'function') {
      Object.assign = function(target) {
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source != null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }
    // END for ie
  }
  render() {
    // https://react-slick.neostack.com/docs/api
    var settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      arrows: false,
      pauseOnHover: false,
      onInit: () =>
        setTimeout(() => {
          let firstImg = document.querySelector('.main-slider-wrapper .slick-active img');
          if (firstImg) {
            firstImg.style.transform = 'scale(1.3)';
          }
        }, 10),
      // beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: (current) => {
        let allSlides = document.querySelectorAll('.main-slider-wrapper img');
        let activeImg = document.querySelector('.main-slider-wrapper .slick-active img');
        for (let i = 0; i < allSlides.length; i++) {
          allSlides[i].style.transform = 'scale(1)';
        }
        activeImg.style.transform = 'scale(1.3)';
      }
    };
    return (
      <div className="main-slider-wrapper">
        <div className="container">
          <h1>Мы – Seven Degrees. Создаем digital-продукты для бизнеса</h1>
        </div>
        <Slider {...settings}>
          <div className="slider-item-wrapper">
            <img src={one} alt="slider" />
            <div className="bg" />
            <div className="container">
              <h5>*Интернет-магазин Infinity Lashes</h5>
            </div>
          </div>
          <div className="slider-item-wrapper">
            <img src={two} alt="slider" />
            <div className="bg" />
            <div className="container">
              <h5>*Корпоративный сайт Borsa</h5>
            </div>
          </div>
          <div className="slider-item-wrapper">
            <img src={three} alt="slider" />
            <div className="bg" />
            <div className="container">
              <h5>*Приложение Babyfaine</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export { SliderMain };
