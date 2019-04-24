import React, { Component } from 'react';

import sentimg from '../img/sent.png';

class Request extends Component {
  state = {
    sent: false
  };
  _focused = (e) => {
    e.target.parentNode.classList.add('focused');
  };
  _blur = (e) => {
    let input = e.target;
    let val = input.value;
    if (val === '') {
      input.classList.remove('filled');
      input.parentNode.classList.remove('focused');
    } else {
      input.classList.add('filled');
    }
  };
  _closePopup = () => {
    document.querySelector('.request-popup-wrapper').classList.remove('active');
    document.querySelector('.popup-bg').classList.remove('active');
  };
  render() {
    let { sent } = this.state;
    return (
      <React.Fragment>
        <div className="popup-bg" onClick={this._closePopup} />
        {!sent ? (
          <section className="request-popup-wrapper">
            <svg
              onClick={this._closePopup}
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="21.2132" width="30" height="2" transform="rotate(-45 0 21.2132)" fill="#201600" />
              <rect x="1.41406" width="30" height="2" transform="rotate(45 1.41406 0)" fill="#201600" />
            </svg>
            <h6 className="request-header">Оставить заявку</h6>
            <p className="request-subheader">Расскажите о вашем проекте. Мы свяжемся с вами и обсудим детали</p>
            <form>
              <div className="form-group error">
                <label htmlFor="name" className="form-label">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name form-input"
                  onFocus={this._focused}
                  onBlur={this._blur}
                />
              </div>
              <br />
              <div className="row">
                <div className="form-group walid">
                  <label htmlFor="email" className="form-label">
                    Ваше имя
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email form-input"
                    onFocus={this._focused}
                    onBlur={this._blur}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tel" className="form-label">
                    Ваше имя
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="tel form-input"
                    onFocus={this._focused}
                    onBlur={this._blur}
                  />
                </div>
              </div>
              <br />
              <label htmlFor="textarea">Опишите ваш проект</label>
              <textarea name="textarea" id="textarea" rows="10" />
              <button type="submit">Отправить заявку</button>
              <p>Нажимая на кнопку «Отправить заявку», вы даёте согласие на обработку своих персональных данных</p>
            </form>
          </section>
        ) : (
          <section className="request-popup-wrapper sent">
            <svg
              onClick={this._closePopup}
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="21.2132" width="30" height="2" transform="rotate(-45 0 21.2132)" fill="#201600" />
              <rect x="1.41406" width="30" height="2" transform="rotate(45 1.41406 0)" fill="#201600" />
            </svg>
            <div className="sent-content-wrapper">
              <div className="sent-header-wrapper">
                <h5 className="header-sent">Спасибо большое!</h5>
                <img src={sentimg} alt="sent" />
              </div>
              <p className="p-sent">Скоро мы обязательно свяжемся с вами!</p>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export { Request };
