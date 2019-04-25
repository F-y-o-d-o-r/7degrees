import React, { Component } from 'react';

class Footer extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector('body').style.opacity = 1;
    }, 500);
  }
  render() {
    return (
      <div className="footer">
        <div className="container">
          <h3>Напишите нам</h3>
          <a href="mailto:hello@sevendegrees.com" className="email">
            hello@sevendegrees.com
          </a>
          <div className="footer-bottom">
            <span>© 2014—2019. Seven Degrees</span>
            <a href="tel:++380500874311">+38 (050) 087-4-311</a>
          </div>
        </div>
      </div>
    );
  }
}

export { Footer };
