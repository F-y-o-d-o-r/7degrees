import React, { Component } from 'react';

class Clients extends Component {
  render() {
    return (
      <section className="clients">
        <div className="container">
          <h2 className="clients-header">Наши клиенты</h2>
          <div className="clients-subheader">
            Мы сотрудничаем с сильными игроками в бизнесе. Наша задача, используя весь спектр наших компетенций, усилить
            бизнес нашего клиента.
          </div>
          <div className="clients-wrapper">
            <div className="row">
              <div className="client">
                <img src="img/clients/01.svg" alt="дисконти" />
              </div>
              <div className="client">
                <img src="img/clients/02.svg" alt="синемалист" />
              </div>
              <div className="client">
                <img src="img/clients/03.svg" alt="зачёт" />
              </div>
              <div className="client">
                <img src="img/clients/04.svg" alt="мбфн" />
              </div>
              <div className="client">
                <img src="img/clients/05.svg" alt="инфинити" />
              </div>
              <div className="client">
                <img src="img/clients/06.svg" alt="борса" />
              </div>
            </div>
            <div className="row">
              <div className="client">
                <img src="img/clients/07.svg" alt="фиабси" />
              </div>
              <div className="client">
                <img src="img/clients/08.svg" alt="креско" />
              </div>
              <div className="client">
                <img src="img/clients/09.svg" alt="кордаг" />
              </div>
              <div className="client">
                <img src="img/clients/10.svg" alt="педигри" />
              </div>
              <div className="client">
                <img src="img/clients/11.svg" alt="нч" />
              </div>
              <div className="client">
                <img src="img/clients/12.svg" alt="лсгрупп" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { Clients };
