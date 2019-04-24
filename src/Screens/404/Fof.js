import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

class Fof extends Component {
  componentDidMount() {
    document.querySelector('.header-wrapper').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
  }
  componentWillUnmount() {
    document.querySelector('.header-wrapper').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
  }
  render() {
    return (
      <section className="fof">
        <img src={logo} alt="logo" />
        <h1>404</h1>
        <h2>Оххх...</h2>
        <p>
          Кажется, что-то пошло не так. Запрашиваемая страница не найдена. Попробуйте посмотреть на главной, возможно,
          вы найдете то, что искали
        </p>
        <Link to="/" className="btn">
          На главную
        </Link>
      </section>
    );
  }
}

export { Fof };
