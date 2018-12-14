import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Header.css';

class Header extends Component {
  // get link () {
  //   return {
  //     width: '100px',
  //     padding: '12px',
  //     margin: '0 6px 6px',
  //     background: 'blue',
  //     textDecoration: 'none',
  //     color: 'white',
  //   }
  // }
  // get active () {
  //   return {
  //     width: '100px',
  //     padding: '12px',
  //     margin: '0 6px 6px',
  //     background: 'white',
  //     textDecoration: 'none',
  //     color: 'blue',
  //   }
  // }

  render() {
    const pages = [
      'About',
      'Music',
      'Visual',
      'Web'
    ]

    return (
      <div className="Header">
        <NavLink
          to={`/`}
          exact

          className="NavLink"
          activeClassName="ActiveNavLink"
        >
          Home
        </NavLink>
        {pages.map(this.renderNavlink)}
      </div>
    );
  }

  ///////////////

  renderNavlink = (page) => {

    return (
      <NavLink
        to={`/${page.toLowerCase()}`}
        exact

        className="NavLink"
        activeClassName="ActiveNavLink"
      >
        {page}
      </NavLink>
    )
  }
}

export default Header;
