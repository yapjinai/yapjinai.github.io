import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Nav.css';

class Nav extends Component {

  render() {
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
        {this.renderNavLinks()}
      </div>
    );
  }

  ///////////////

  renderNavLinks = () => {
    const pages = [
      'About',
      'Web',
      'Music',
      'Visual',
    ]
    return pages.map(page => {
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
    })
  }

  renderNavlink = (page) => {


  }
}

export default Nav;







// {pages.map(this.renderNavlink)}
