import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Nav.css';

class Nav extends Component {

  render() {
    const pages = [
      'About',
      'Music',
      'Visual',
      'Web'
    ]

    return (
      <div className="Nav">
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
        key={page}
      >
        {page}
      </NavLink>
    )
  }
}

export default Nav;
