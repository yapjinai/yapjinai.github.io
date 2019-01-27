import React, { Component } from 'react';
// import '../css/Visual.css';

import PhotoSet from '../presentational/PhotoSet';

class Visual extends Component {
  render() {
    return (
      <div className="page Visual">
        <h1>Visual</h1>

        <PhotoSet project={{title: 'hi'}} />

      </div>
    );
  }
}

export default Visual;
