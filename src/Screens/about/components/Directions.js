import React, { Component } from 'react';

import Direction from './_Direction';
import data from '../../../json/data.json';

class Directions extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.setState(
      {
        data: data.directions
      },
      () => {
        // remove preloader
        //? todo preloader ?
      }
    );
  }
  render() {
    let { data } = this.state;
    return (
      <div className="container">
        <h2 className="header-directions">Основные направления</h2>
        <p className="subheader-directions">
          Применяем комплексный подход в наших проектах: проводим вдумчивую аналитику, составляем стратегии, делаем
          брендинг, дизайн
        </p>
        <div className="directions-wrapper">
          <Direction data={data} />
        </div>
      </div>
    );
  }
}
export { Directions };
