import React, { Component } from 'react';

class Technologies extends Component {
  render() {
    return (
      <section className="technologies">
        <div className="container">
          <div className="technologies-header">Технологиии</div>
          <div className="technologies-subheader">
            Наши специалисты всегда в курсе всех последних обновлений, трендов и правил в области разработки современных
            веб-решений. Мы используем только самые передовые технологии
          </div>

          <div className="technologies-wpapper">
            <div className="technologi-wrapper">
              <div className="technologi-header">Back-end</div>
              <div className="technologi-body">
                PHP7 • Symfony • Laravel • Yii2 PHPUnit • MVC • Composer Bitrix • REST • SOAP • XML XSL • Node.js •
                MySQL • PostgreSQL • Docker • Wordpress • Joomla
              </div>
            </div>
            <div className="technologi-wrapper">
              <div className="technologi-header">Front-end</div>
              <div className="technologi-body">
                HTML5 • CSS3 • LESS • SASS • SCSS Pug (Jade) • JS (ES5, ES6, ESNext) • TypeScript • Bootstrap • Webpack
                • Gulp • Docker • Angular • React • Redux • NodeJS • Express • Socket.IO
              </div>
            </div>
            <div className="technologi-wrapper">
              <div className="technologi-header">iOS/Android</div>
              <div className="technologi-body">
                Xcode • Apple Pay • SQLite • Git • Android Studio • Firebase • Google Pay • React Native
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { Technologies };
