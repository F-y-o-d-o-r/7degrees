import React, { Component } from 'react';
import { post_send } from '../mail/mail';
import sentimg from '../img/sent.png';

var phpmail = require('../mail/mail.php');
// require('../mail/phpmailer/Exception.php');
// require('../mail/phpmailer/PHPMailer.php');
// require('../mail/phpmailer/SMTP.php');

class Request extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    sent: false,
    name: '',
    email: '',
    tel: '',
    textarea: '',
    emailValid: false,
    emailVisited: false,
    nameValid: false,
    nameVisited: false,
    telValid: false,
    telVisited: false,
    className: 'form-group'
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => {
        switch (name) {
          case 'name':
            this._onSubmitName(value);
            break;
          case 'email':
            this._onSubmitEmail(value);
            break;
          case 'tel':
            this._onSubmitTel(value);
            break;
          default:
            break;
        }
      }
    );
  }
  _onSubmitEmail = (email) => {
    if (!this._validateEmail(this.state.email)) {
      this.setState({ emailValid: false, emailVisited: true });
    } else {
      this.setState({ emailValid: true, emailVisited: true }, function() {});
    }
  };
  _validateEmail = (email) => {
    /*eslint-disable */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*eslint-enable */
    return re.test(email);
  };
  _onSubmitName = () => {
    if (!this._validateName(this.state.name)) {
      this.setState({ nameValid: false, nameVisited: true });
    } else {
      this.setState({ nameValid: true, nameVisited: true }, function() {});
    }
  };
  _validateName = (text) => {
    var re = /^.{6,}$/;
    return re.test(text);
  };
  _onSubmitTel = () => {
    if (!this._validateTelInput(this.state.tel)) {
      this.setState({ telValid: false, telVisited: true });
    } else {
      this.setState({ telValid: true, telVisited: true }, function() {});
    }
  };
  _validateTelInput = (text) => {
    var re = /^\d{10,}$/;
    return re.test(text);
  };
  _fullSubmit = () => {
    if (this.state.emailValid && this.state.telValid && this.state.name) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
  };
  _letterToSend = (e) => {
    e.preventDefault();
    if (this.state.formValid) {
      post_send('body', phpmail, [ 'email', 'message' ], [ 'this.state.email', 'this.state.name' ]);
    } else {
      console.log('not valid');
      post_send('body', phpmail, [ 'email', 'message' ], [ 'this.state.email', 'this.state.name' ]);
    }
  };

  render() {
    let {
      sent,
      name,
      email,
      tel,
      textarea,
      emailValid,
      emailVisited,
      nameValid,
      nameVisited,
      telValid,
      telVisited
    } = this.state;
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
              <div
                className={
                  !nameVisited ? 'form-group' : nameVisited & !nameValid ? 'form-group error' : 'form-group walid'
                }
              >
                <label htmlFor="name" className="form-label">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name form-input"
                  onFocus={this._focused}
                  onBlur={(e) => {
                    this._blur(e);
                    this._fullSubmit();
                  }}
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div className="row">
                <div
                  className={
                    !emailVisited ? 'form-group' : emailVisited & !emailValid ? 'form-group error' : 'form-group walid'
                  }
                >
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email form-input"
                    onFocus={this._focused}
                    onBlur={(e) => {
                      this._blur(e);
                      this._fullSubmit();
                    }}
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div
                  className={
                    !telVisited ? 'form-group' : telVisited & !telValid ? 'form-group error' : 'form-group walid'
                  }
                >
                  <label htmlFor="tel" className="form-label">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="tel form-input"
                    onFocus={this._focused}
                    onBlur={(e) => {
                      this._blur(e);
                      this._fullSubmit();
                    }}
                    value={tel}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <br />
              <label htmlFor="textarea">Опишите ваш проект</label>
              <textarea name="textarea" id="textarea" rows="10" value={textarea} onChange={this.handleInputChange} />
              <button type="submit" onClick={this._letterToSend}>
                Отправить заявку
              </button>
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
