import React, { Component } from 'react';
import Slider from 'react-slick';

import data from '../../../json/data.json';

class SliderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0,
      bigSlider: null
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
  componentDidMount() {
    this.setState(
      {
        data: data.bigSlider
      },
      () => {
        // remove preloader
        //? todo preloader ?
      }
    );
  }
  _onDotsClick = (e) => {
    this.slider.slickPause();
    setTimeout(() => {
      this.slider.slickPlay();
    }, 2000);
    let buttons = document.querySelectorAll('.main-slider-wrapper .slick-dots li button');
    for (let i = 0; i < buttons.length; i++) {
      setTimeout(() => {
        buttons[i].classList.remove('slick-was-before');
        if (i < +e.target.innerText) {
          buttons[i].classList.add('slick-was-before');
        }
      }, 10);
    }
  };

  _imageScale = () => {
    setTimeout(() => {
      let activeImg = document.querySelector('.main-slider-wrapper .slick-active .bg');
      if (activeImg) {
        activeImg.style.transform = 'scale(1.1)';
      }
    }, 10);
  };

  render() {
    let slides = this.state.data;
    // https://react-slick.neostack.com/docs/api
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 7000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: false,
      arrows: false,
      pauseOnHover: false,
      onInit: () => {
        setTimeout(() => {
          let buttons = document.querySelectorAll('.main-slider-wrapper .slick-dots li button');
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', this._onDotsClick);
          }
          if (buttons[0]) {
            buttons[0].classList.add('slick-was-before');
          }
          let firstImg = document.querySelector('.main-slider-wrapper .slick-active .bg');
          if (firstImg) {
            firstImg.style.transform = 'scale(1.1)';
          }
        }, 10);
      },
      beforeChange: (current, next) => {
        let buttons = document.querySelectorAll('.main-slider-wrapper .slick-dots li button');
        buttons[current].classList.add('slick-was-before');
        if (current === buttons.length - 1) {
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('slick-was-before');
          }
        }
      },
      afterChange: (current) => {
        let allSlides = document.querySelectorAll('.main-slider-wrapper .bg');
        for (let i = 0; i < allSlides.length; i++) {
          allSlides[i].style.transform = 'scale(1)';
        }
        this._imageScale();
      }
    };
    return (
      <div className="main-slider-wrapper">
        <div className="container">
          <h1>Мы – Seven Degrees. Создаем digital-продукты для бизнеса</h1>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {slides ? (
            slides.map((slide) => (
              <div className="slider-item-wrapper" key={slide.id}>
                <div className="bg" style={{ backgroundImage: 'url(img/bigslider/' + slide.src + ')' }} />
                <div className="container">
                  <h5>{slide.name}</h5>
                </div>
              </div>
            ))
          ) : null}
        </Slider>
      </div>
    );
  }
}

export { SliderMain };
