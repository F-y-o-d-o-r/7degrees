import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
        <Link to="/">Index</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export { Header };
