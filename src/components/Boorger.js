import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Boorger extends Component {
  _linkClick = () => {
    document.querySelector('.boorger-wrapper').classList.toggle('open');
    document.querySelector('#boorgerToOpen').classList.remove('open');
  };
  _request = (e) => {
    e.preventDefault();
    document.querySelector('.request-popup-wrapper').classList.add('active');
    document.querySelector('.popup-bg').classList.add('active');
    this._linkClick();
  };
  _changeLanguage = (e) => {
    e.preventDefault();
    if (e.target.text === 'EN') {
      e.target.text = 'RU';
    } else {
      e.target.text = 'EN';
    }
  };
  render() {
    return (
      <div className="boorger-wrapper">
        <div className="boorger-content">
          <nav>
            <NavLink exact to="/" onClick={this._linkClick}>
              Портфолио
            </NavLink>
            <NavLink to="/about" onClick={this._linkClick}>
              О компании
            </NavLink>
            <NavLink to="/contacts" onClick={this._linkClick}>
              Контакты
            </NavLink>
            <a href="/#" id="request" onClick={(e) => this._request(e)}>
              Оставить заявку
            </a>
            <a href="/#" id="language" onClick={(e) => this._changeLanguage(e)}>
              EN
            </a>
          </nav>
          <div className="contacts-wrapper">
            <a href="tel:++380500874311">+38 (050) 087-4-311</a>
            <a href="mailto:hello@sevendegrees.com" className="email">
              hello@sevendegrees.com
            </a>
          </div>
          <div className="social-wrapper">
            <div className="circle-wrapper">
              <a href="/#" target="_blank" rel="noopener noreferrer" className="circle">
                <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.0106 9.06653H8.57967V6.16046C8.57967 5.0691 9.303 4.81466 9.81246 4.81466C10.3208 4.81466 12.9393 4.81466 12.9393 4.81466V0.016808L8.63299 0C3.85253 0 2.76465 3.57839 2.76465 5.86835V9.06653H0V14.0104H2.76465C2.76465 20.3552 2.76465 28 2.76465 28H8.57967C8.57967 28 8.57967 20.2799 8.57967 14.0104H12.5035L13.0106 9.06653Z"
                    fill="#171717"
                  />
                </svg>
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer" className="circle">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0002 6.71768C10.0486 6.71768 6.77441 9.93542 6.77441 13.9435C6.77441 17.9516 9.99216 21.1693 14.0002 21.1693C18.0083 21.1693 21.226 17.8951 21.226 13.9435C21.226 9.99187 17.9518 6.71768 14.0002 6.71768ZM14.0002 18.5725C11.4599 18.5725 9.37119 16.4838 9.37119 13.9435C9.37119 11.4032 11.4599 9.31446 14.0002 9.31446C16.5405 9.31446 18.6293 11.4032 18.6293 13.9435C18.6293 16.4838 16.5405 18.5725 14.0002 18.5725Z"
                    fill="#171717"
                  />
                  <path
                    d="M21.5082 8.18545C22.4123 8.18545 23.1453 7.4525 23.1453 6.54835C23.1453 5.64421 22.4123 4.91125 21.5082 4.91125C20.604 4.91125 19.8711 5.64421 19.8711 6.54835C19.8711 7.4525 20.604 8.18545 21.5082 8.18545Z"
                    fill="#171717"
                  />
                  <path
                    d="M25.7419 2.31452C24.2742 0.790322 22.1855 0 19.8145 0H8.18548C3.27419 0 0 3.27419 0 8.18548V19.7581C0 22.1855 0.790322 24.2742 2.37097 25.7984C3.89516 27.2661 5.92742 28 8.24194 28H19.7581C22.1855 28 24.2177 27.2097 25.6855 25.7984C27.2097 24.3306 28 22.2419 28 19.8145V8.18548C28 5.81452 27.2097 3.78226 25.7419 2.31452ZM25.5161 19.8145C25.5161 21.5645 24.8952 22.9758 23.879 23.9355C22.8629 24.8952 21.4516 25.4032 19.7581 25.4032H8.24194C6.54839 25.4032 5.1371 24.8952 4.12097 23.9355C3.10484 22.9194 2.59677 21.5081 2.59677 19.7581V8.18548C2.59677 6.49193 3.10484 5.08065 4.12097 4.06452C5.08065 3.10484 6.54839 2.59677 8.24194 2.59677H19.871C21.5645 2.59677 22.9758 3.10484 23.9919 4.12097C24.9516 5.1371 25.5161 6.54839 25.5161 8.18548V19.8145Z"
                    fill="#171717"
                  />
                </svg>
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer" className="circle">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.7668 0H2.05533C0.920423 0 0 0.898468 0 2.00579V25.9948C0 27.1015 0.920423 28 2.05533 28H25.7668C26.9034 28 27.8238 27.101 27.8238 25.9948V2.00579C27.8238 0.897905 26.9028 0 25.7668 0ZM8.43355 23.4395H4.23113V10.7963H8.43355V23.4395ZM6.33262 9.06912H6.30448C4.89485 9.06912 3.98287 8.09803 3.98287 6.88488C3.98287 5.6447 4.923 4.70063 6.36021 4.70063C7.79798 4.70063 8.68238 5.6447 8.71052 6.88488C8.71052 8.09803 7.79742 9.06912 6.33262 9.06912ZM23.5876 23.4395H19.3852V16.674C19.3852 14.975 18.7772 13.8154 17.2567 13.8154C16.0959 13.8154 15.4046 14.5973 15.1 15.3528C14.9891 15.6224 14.9621 15.9996 14.9621 16.3779V23.439H10.7597C10.7597 23.439 10.8148 11.9807 10.7597 10.7957H14.9621V12.5853C15.5205 11.724 16.5192 10.4973 18.7502 10.4973C21.5148 10.4973 23.5882 12.305 23.5882 16.1888V23.4395H23.5876Z"
                    fill="#171717"
                  />
                </svg>
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer" className="circle">
                <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.6829 1.76423C18.6667 1.76423 16.3902 3.7561 15.4797 6.88618C14.0569 4.66667 12.9187 2.1626 12.2927 0H9.10569V8.36585C9.10569 10.0163 7.73984 11.3821 6.08943 11.3821C4.43902 11.3821 3.07317 10.0163 3.07317 8.36585V0.0569102H0V8.42276C0 11.8943 2.78862 14.6829 6.20325 14.6829C9.61789 14.6829 12.4065 11.8943 12.4065 8.42276V7C13.0325 8.25203 13.8293 9.61789 14.6829 10.813L12.6911 20.0894H15.935L17.3008 13.3171C18.5528 14.1138 19.9756 14.5691 21.6829 14.5691C25.1545 14.5691 28 11.7236 28 8.0813C28 4.60976 25.1545 1.76423 21.6829 1.76423ZM21.6829 11.3821C20.4309 11.3821 19.122 10.813 18.0976 9.95935L18.439 8.70732V8.65041C18.6667 7.28455 19.4065 5.00813 21.7398 5.00813C23.5041 5.00813 24.9268 6.43089 24.9268 8.19512C24.8699 9.95935 23.3333 11.3821 21.6829 11.3821Z"
                    fill="#171717"
                  />
                </svg>
              </a>
            </div>
          </div>
          <span className="copyright">© 2014—2019. Seven Degrees</span>
        </div>
      </div>
    );
  }
}

export { Boorger };
