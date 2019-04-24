import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import logo from '../img/logo.png';

class Header extends Component {
  state = {
    currentPage: 'Портфолио'
  };
  componentDidMount() {
    this._checkCurrentPage();
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
                EN
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
