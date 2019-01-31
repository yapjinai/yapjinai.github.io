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
    const githubUrl = 'https://github.com/yapjinai';
    const s3WebUrl = 'https://s3.amazonaws.com/yapjinai/web';
    const projects = [
      {
        name: 'djin',
        link: 'http://djin.herokuapp.com',
        frontend: `${githubUrl}/djin-frontend`,
        backend: `${githubUrl}/djin-backend`,
        demo: `${s3WebUrl}/djin-demo.mov`,
        screenshot: `${s3WebUrl}/djin-screenshot.png`,
        description: 'A React/Rails app for mixing beats and songs on the fly'
      },
      {
        name: 'shrinelords',
        link: 'https://shrinelords.herokuapp.com',
        frontend: `${githubUrl}/shrinelords-frontend/tree/mod-6`,
        backend: `${githubUrl}/shrinelords-backend`,
        demo: `${s3WebUrl}/shrinelords-demo.mov`,
        screenshot: '',
        description: 'The spiritual and digital merge in this technopagan haven: build and meditate in virtual shrines set in simulated nature.'
      },
      {
        name: 'forevernote',
        link: 'http://windows-xp.herokuapp.com',
        frontend: `${githubUrl}/windows-xp`,
        backend: `${githubUrl}/windows-xp-api`,
        demo: `${s3WebUrl}/forevernote-demo.mov`,
        screenshot: '',
        description: 'Publicly share text documents on a Windows XP-style Notepad clone built in Rails and React'
      }
    ];

    return (
      projects.map(p => {
        return <WebProject project={p} key={p.name} />
      })
    );
  }
}

export default Web;
