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
      <div className="Home">
        <img
          id='bg'
          src={bg}
          alt='bg'
        />
        {this.renderLinks()}
      </div>
    );
  }

  /////////////////

  renderLinks = () => {
    const links = [
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
      {
        name: 'dog',
        image: dog,
        page: 'web'
      },
    ]

    return links.map(link => {
      return <Link link={link} key={link.name} />
    })
  }
}

export default Home;
