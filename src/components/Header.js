import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import logo from '../img/logo.png';
// import ScrollMagic from 'scrollmagic';

class Header extends Component {
  state = {
    currentPage: 'Портфолио',
    firstPageScroll: true
  };
  componentDidMount() {
    this._checkCurrentPage();

    // heder scroll
    var oldScrollY = 0;
    var div = document.querySelector('.header-wrapper');
    window.onscroll = () => {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      var dY = scrolled - oldScrollY;
      if (dY < 0) {
        setTimeout(() => {
          div.classList.remove('hide');
          div.classList.add('show');
        }, 500);
      } else {
        setTimeout(() => {
          div.classList.remove('show');
          div.classList.add('hide');
        }, 500);
      }
      oldScrollY = scrolled;
      switch (this.state.currentPage) {
        case 'Портфолио':
          if (scrolled > 650) {
            div.classList.add('black-bg');
          } else {
            div.classList.remove('black-bg');
          }
          break;
        case 'О компании':
          if (scrolled > 0) {
            console.log(1, scrolled);
            div.classList.add('black-bg');
            div.classList.remove('white-bg');
          }
          if (scrolled > 1400) {
            console.log(2);
            div.classList.remove('black-bg');
            div.classList.add('white-bg');
          }
          break;
        case 'Контакты':
          if (scrolled > 0) {
            console.log(1, scrolled);
            div.classList.add('black-bg');
          }
          break;
        default:
          if (scrolled > 650) {
            div.classList.add('black-bg');
          } else {
            div.classList.remove('black-bg');
          }
          break;
      }
    };
    // heder scroll
    // let controllerContacts = new ScrollMagic.Controller();
    // new ScrollMagic.Scene({
    //   triggerElement: 'body',
    //   offset: 1000,
    //   duration: 0
    // })
    //   .setClassToggle('.header-wrapper', 'black-bg')
    //   //.addIndicators({ name: 'smoth-show-from-div' })
    //   .addTo(controllerContacts);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this._checkCurrentPage();
    }
  }
  _checkCurrentPage = () => {
    let currentPage;
    switch (this.props.location.pathname) {
      case '/':
        currentPage = 'Портфолио';
        break;
      case '/about':
        currentPage = 'О компании';
        break;
      case '/contacts':
        currentPage = 'Контакты';
        break;
      default:
        currentPage = 'Портфолио';
        break;
    }
    this.setState({
      currentPage
    });
  };
  _request = (e) => {
    e.preventDefault();
    document.querySelector('.request-popup-wrapper').classList.add('active');
    document.querySelector('.popup-bg').classList.add('active');
  };
  _changeLanguage = (e) => {
    e.preventDefault();
    if (e.target.text === 'EN') {
      e.target.text = 'RU';
    } else {
      e.target.text = 'EN';
    }
  };
  _boorger = (e) => {
    e.currentTarget.classList.toggle('open');
    document.querySelector('.boorger-wrapper').classList.toggle('open');
  };
  render() {
    let { currentPage } = this.state;
    return (
      <div className="header-wrapper">
        <div className="container ">
          <header>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <nav>
              <NavLink exact to="/">
                Портфолио
              </NavLink>
              <NavLink to="/about">О компании</NavLink>
              <NavLink to="/contacts">Контакты</NavLink>
              <a href="/#" id="request" onClick={(e) => this._request(e)}>
                Оставить заявку
              </a>
              <a href="/#" id="language" onClick={(e) => this._changeLanguage(e)}>
                RU
              </a>
            </nav>
            <div className="mobile-popup-wrapper">
              <h5>{currentPage}</h5>
              <div className="boorger-to-open" id="boorgerToOpen" onClick={this._boorger}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

// export { Header };
export default withRouter(Header);
