import React, { Component } from 'react';

import '../../css/Splash.css';

import bg from '../../img/splash/bg.png'
import man from '../../img/splash/man.png'
import woman from '../../img/splash/woman.png'
import dog from '../../img/splash/dog.png'

class Splash extends Component {
  render() {
    return (
      <div
        className="Splash"
        onClick={this.hide}
      >
        <img
          id='bg'
          src={bg}
        />
        <img src={man} />
        <img src={woman} />
        <img src={dog} />
      </div>
    );
  }

  /////////////////

  hide = () => {
    document.querySelector('.Splash').classList.add('hide');
  }
}

export default Splash;
