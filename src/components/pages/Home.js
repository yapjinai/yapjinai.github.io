import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import '../../css/Home.css';

import Link from '../presentational/Link';

import bg from '../../img/home/bg.png';
import man from '../../img/home/man.png';
import woman from '../../img/home/woman.png';
import dog from '../../img/home/dog.png';

class Home extends Component {

  render() {
    return (
      <>
        <div className="Home">
          <img
            id='bg'
            src={bg}
            alt='bg'
          />
          <span id='enter'>Enter</span>
          {this.renderLinks()}
        </div>
        <div className="Home-mobile">
          <span className='title'>jin ai yap</span>
          {this.renderMobileLinks()}
        </div>
      </>
    );
  }

  /////////////////

  renderLinks = () => {
    const links = [
      {
        name: 'dog',
        image: dog,
        page: 'web'
      },
      {
        name: 'man',
        image: man,
        page: 'visual'
      },
      {
        name: 'woman',
        image: woman,
        page: 'music'
      },
    ]

    return links.map(link => {
      return <Link link={link} key={link.name} />
    })
  }

  renderMobileLinks = () => {
    const links = [
      {
        name: 'dog-mobile',
        image: dog,
        page: 'web'
      },
      {
        name: 'man-mobile',
        image: man,
        page: 'visual'
      },
      {
        name: 'woman-mobile',
        image: woman,
        page: 'music'
      },
    ]

    return links.map(link => {
      return (
        <a href={link.page} key={link.name} title={link.name}>
          {link.page}<br />
          <img src={link.image} alt={link.name} />
        </a>
      )
    })
  }
}

export default Home;
