import React, { Component } from 'react';
import '../../css/Visual.css';

import PhotoSet from '../presentational/PhotoSet';

class Visual extends Component {
  render() {
    return (
      <div className="Visual">
        <h1>Visual</h1>

        <div className="PhotoSets">
          {this.renderPhotoSets()}
        </div>

      </div>
    );
  }

  /////////////////

  renderPhotoSets = () => {
    const projects = [
      {
        id: 'RobotCafe',
        title: 'Robot Cafe',

      },
      {
        id: 'Agoraphobia',
        title: 'Agoraphobia',
      },
      {
        id: 'Barb',
        title: 'Barb',

      }
    ]

    return (
      projects.map(p => {
        return <PhotoSet project={p} key={p.title} />
      })
    )
  }
}

export default Visual;
