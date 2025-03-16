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
          id='home'
        >
          About
        </NavLink>

        {this.renderNavLinks()}
      </div>
    );
  }

  ///////////////

  renderNavLinks = () => {
    const pages = [
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
}

export default Nav;








  // <NavLink
  //   to={`/`}
  //   exact
  //
  //   className="NavLink"
  //   activeClassName="ActiveNavLink"
  //   id='home'
  // >
  //   Home
  // </NavLink>
