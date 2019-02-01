import React, { Component } from 'react';

import mail from '../../img/about/mail.png';
import github from '../../img/about/github.png';
import linkedin from '../../img/about/linkedin.png';
import soundcloud from '../../img/about/soundcloud.png';
import medium from '../../img/about/medium.png';

import splash from '../../img/home/splash.png';

import '../../css/About.css';

const IconContainer = () => {
  return (
    <div className='icon-container'>
      <a href='https://github.com/yapjinai'><img src={github} alt='github' className='icon' /></a>
      <a href='https://www.linkedin.com/in/yapjinai'><img src={linkedin} alt='linkedin'  className='icon' /></a>
      <a href='https://medium.com/@yapjinai'><img src={medium} alt='medium'  className='icon' /></a>
      <a href='https://soundcloud.com/jinai'><img src={soundcloud} alt='soundcloud'  className='icon' /></a>
    </div>
  )
}

class About extends Component {
  render() {
    return (
      <>

        <div className="page About">
        <img src={splash} alt='splash' id='splash' />

          <h1>Jin Ai Yap</h1>

          <p>
            My name is Jin Ai. I am a full stack web developer with experience in Ruby on Rails, React.js, and React-Redux, and I graduated from Yale with a degree in Art.
          </p>

          <p>
            When I build apps, I like to imagine how other cultures would use the internet if they had invented it.
          </p>

          <h2>Technical skills:</h2>

          <p>
            JavaScript, Ruby on Rails, React.js, React-Redux, HTML5, CSS, Sass, SQL, Adobe Creative Cloud
          </p>

          <h2>I also like:</h2>

          <p>
            Climbing, computer music, and cats.
          </p>

          <h2>Find me:</h2>

          <p><a href='mailto:jinai.jyap@gmail.com' title='email'>Email</a> (jinai.jyap@gmail.com)
          </p>

          <p><a href='http://learn.co/yapjinai/resume' title='résumé'>Résumé</a></p>

          <IconContainer />

          <h6>
            Icons by <a href="https://www.flaticon.com/authors/swifticons" title="Swifticons">Swifticons</a>.
          </h6>
        </div>
      </>
    );
  }
}

export default About;
// <a href='mailto:jinai.jyap@gmail.com'><img src={mail} alt='mail' className='icon' /></a>
