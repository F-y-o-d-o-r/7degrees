import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logo from '../img/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.boorgerToOpenRef = React.createRef();
  }
  state = {
    currentPage: 'Портфолио',
    firstPageScroll: true
  };
  componentDidMount() {
    this._checkCurrentPage();
    // START custom heder scroll
    var oldScrollY = 0;
    var div = document.querySelector('.header-wrapper');
    window.onscroll = () => {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var dY = scrolled - oldScrollY;
      if (dY < 0) {
        setTimeout(() => {
          div.classList.remove('hide');
          div.classList.add('show');
        }, 10);
      } else {
        setTimeout(() => {
          div.classList.remove('show');
          div.classList.add('hide');
        }, 10);
      }
      oldScrollY = scrolled;
      switch (this.state.currentPage.props.id) {
        case 'nav.portfolio':
          if (scrolled > 650) {
            div.classList.add('black-bg');
            this._yearsHide();
          } else {
            div.classList.remove('black-bg');
          }
          break;
        case 'nav.about':
          if (scrolled > 0) {
            div.classList.add('black-bg');
            div.classList.remove('white-bg');
          }
          if (window.innerWidth > 1351) {
            if (scrolled > 1400) {
              div.classList.remove('black-bg');
              div.classList.add('white-bg');
            }
          }
          break;
        case 'nav.contacts':
          if (scrolled > 0) {
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
  }
  // START Years hide at botoom
  _yearsHide = () => {
    let yearWrappers = document.querySelectorAll('.archive-items');
    for (let i = 0; i < yearWrappers.length; i++) {
      if (yearWrappers[i].getBoundingClientRect().bottom < 200) {
        yearWrappers[i].querySelector('.archive-year').classList.add('hide');
      } else {
        yearWrappers[i].querySelector('.archive-year').classList.remove('hide');
      }
    }
  };
  // END Years hide at botoom
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this._checkCurrentPage();
      this._mobileLogoClick();
    }
  }
  _checkCurrentPage = () => {
    let currentPage;
    switch (this.props.location.pathname) {
      case '/':
        currentPage = <FormattedMessage id={'nav.portfolio'} />;
        document.querySelector('.header-wrapper').classList.remove('black-bg');
        document.querySelector('.header-wrapper').classList.remove('white-bg');
        break;
      case '/about':
        currentPage = <FormattedMessage id={'nav.about'} />;
        document.querySelector('.header-wrapper').classList.remove('white-bg');
        break;
      case '/contacts':
        currentPage = <FormattedMessage id={'nav.contacts'} />;
        document.querySelector('.header-wrapper').classList.remove('white-bg');
        break;
      default:
        currentPage = <FormattedMessage id={'nav.portfolio'} />;
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
      this.props.switch('RU');
    } else {
      this.props.switch('EN');
    }
  };
  _boorger = (e) => {
    e.currentTarget.classList.toggle('open');
    document.querySelector('.boorger-wrapper').classList.toggle('open');
  };
  _mobileLogoClick() {
    document.querySelector('.boorger-wrapper').classList.remove('open');
    this.boorgerToOpenRef.current.classList.remove('open');
  }
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
                <FormattedMessage id={'nav.portfolio'} />
              </NavLink>
              <NavLink to="/about">
                <FormattedMessage id={'nav.about'} />
              </NavLink>
              <NavLink to="/contacts">
                <FormattedMessage id={'nav.contacts'} />
              </NavLink>
              <a href="/#" id="request" onClick={(e) => this._request(e)}>
                <FormattedMessage id={'nav.request'} />
              </a>
              <a href="/#" id="language" onClick={(e) => this._changeLanguage(e)}>
                {this.props.language}
              </a>
            </nav>
            <div className="mobile-popup-wrapper">
              <h5>{currentPage}</h5>
              <div className="boorger-to-open" id="boorgerToOpen" onClick={this._boorger} ref={this.boorgerToOpenRef}>
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

export default withRouter(Header);
