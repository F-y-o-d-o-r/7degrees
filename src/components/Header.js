import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../img/logo.png';

class Header extends Component {
  _request = (e) => {
    e.preventDefault();
    let nav = document.querySelectorAll('header nav a');
    console.log(nav);
    nav.forEach((params) => {
      console.log(params);
    });
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
      </div>
    );
  }
}

export { Header };
