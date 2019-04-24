import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

// import { Request } from './index';
import logo from '../img/logo.png';

class Header extends Component {
  _request = (e) => {
    e.preventDefault();
    document.querySelector('.request-popup-wrapper').classList.add('active');
    document.querySelector('.popup-bg').classList.add('active');
    // let nav = document.querySelectorAll('header nav a');
    // for (let index = 0; index < nav.length; index++) {
    //   console.log(nav[index]);
    // }
  };
  _changeLanguage = (e) => {
    e.preventDefault();
    console.log('_changeLanguage');
  };
  render() {
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
                EN
              </a>
            </nav>
          </header>
        </div>
        {/* <Request /> */}
      </div>
    );
  }
}

export { Header };
