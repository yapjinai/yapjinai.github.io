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
    const photographyUrl = 'https://s3.amazonaws.com/yapjinai/visual/photography'
    const projects = [
      {
        id: 'robot',
        title: 'Robot Cafe',
        icon: `${photographyUrl}/robot/icon.jpg`,
        // bg: `${photographyUrl}/robot/bg.png`,
        photos: [
          `${photographyUrl}/robot/1a.jpg`,
          `${photographyUrl}/robot/1b.jpg`,
          `${photographyUrl}/robot/2a.jpg`,
          `${photographyUrl}/robot/2b.jpg`,
          `${photographyUrl}/robot/3a.jpg`,
          `${photographyUrl}/robot/3b.jpg`,
          `${photographyUrl}/robot/4a.jpg`,
          `${photographyUrl}/robot/4b.jpg`,
          `${photographyUrl}/robot/5a.png`,
          `${photographyUrl}/robot/5b.png`,
        ],
        cols: 2,
      },
      {
        id: 'agoraphobia',
        title: 'Agoraphobia (film stills)',
        icon: `${photographyUrl}/agoraphobia/icon.png`,
        // bg: `${photographyUrl}/agoraphobia/bg.png`,
        photos: [
          `${photographyUrl}/agoraphobia/1.png`,
          `${photographyUrl}/agoraphobia/2.png`,
          `${photographyUrl}/agoraphobia/3.png`,
          `${photographyUrl}/agoraphobia/4.png`,
          `${photographyUrl}/agoraphobia/5.png`,
        ],
      },
      {
        id: 'barb',
        title: 'Barb',
        icon: `${photographyUrl}/barb/icon.jpg`,
        // bg: `${photographyUrl}/barb/bg.jpg`,
        photos: [
          `${photographyUrl}/barb/fridge.jpg`,
          `${photographyUrl}/barb/pinata.jpg`
        ],
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
