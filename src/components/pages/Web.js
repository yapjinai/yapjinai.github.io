import React, { Component } from 'react';
import '../../css/Web.css';

import WebProject from '../presentational/WebProject';

class Web extends Component {
  render() {
    return (
      <div className="page Web">
        <h1>Web</h1>

        <div className="WebProjects">
          {this.renderWebProjects()}
        </div>

      </div>
    );
  }

  ///////////////////

  renderWebProjects = () => {
    const projects = [
      {
        name: 'djin',
        link: 'http://djin.herokuapp.com',
        frontend: 'https://github.com/yapjinai/djin-frontend',
        backend: 'https://github.com/yapjinai/djin-backend',
        demo: '',
        screenshot: 'https://s3.amazonaws.com/yapjinai/web/djin-screenshot.png',
        description: 'A React/Rails app for mixing beats and songs on the fly'
      },
      {
        name: 'shrinelords',
        link: 'https://shrinelords.herokuapp.com',
        frontend: 'https://github.com/yapjinai/shrinelords-frontend',
        backend: 'https://github.com/yapjinai/shrinelords-backend',
        demo: 'https://s3.amazonaws.com/yapjinai/web/shrinelords-demo.mov',
        screenshot: '',
        description: 'The spiritual and digital merge in this technopagan haven: build and meditate in virtual shrines set in simulated nature.'
      },
      {
        name: 'forevernote',
        link: 'http://windows-xp.herokuapp.com',
        frontend: 'https://github.com/yapjinai/windows-xp',
        backend: 'https://github.com/yapjinai/windows-xp-api',
        demo: 'https://s3.amazonaws.com/yapjinai/web/forevernote-demo.mov',
        screenshot: '',
        description: 'Publicly share text documents on a Windows XP-style Notepad clone built in Rails and React'
      }
    ]

    return (
      projects.map(p => {
        return <WebProject project={p} key={p.name} />
      })
    )
  }
}

export default Web;
