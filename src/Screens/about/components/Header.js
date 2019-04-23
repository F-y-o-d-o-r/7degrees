import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header-about">Ваши партнеры в эпоху цифровых технологий</h1>
        <p className="subheader-about">
          Seven Degrees - это сплоченная команда ведущих специалистов, которые могут принять любой вызов в области
          разработки веб-приложений и мобильных приложений. Нам нравится то, что мы делаем. Многолетний опыт и глубокое
          знание внутренних бизнес-процессов, которые позволяют нам разрабатывать продукты, какими они должны быть.
        </p>
      </div>
    );
  }
}

export { Header };
