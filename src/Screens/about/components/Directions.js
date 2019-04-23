import React, { Component } from 'react';
import Direction from './_Direction';

class Directions extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="header-directions">Основные направления</h2>
        <p className="subheader-directions">
          Применяем комплексный подход в наших проектах: проводим вдумчивую аналитику, составляем стратегии, делаем
          брендинг, дизайн
        </p>
        <div className="directions-wrapper">
          <Direction />
        </div>
      </div>
    );
  }
}
export { Directions };
