import React, { Component } from 'react';

class PhotoSet extends Component {
  render() {
    const project = this.props.project;

    return (
      <div
      className="PhotoSet"
      id={project.id}
      >
        <h2>{project.title}</h2>

        <div className='Photos'>
          {this.renderPhotos(project.photos)}
        </div>
      </div>
    );
  }

  //////////////////////


  renderPhotos = (photos) => {
    return (
      photos.map(p => {
        return (
          <div className='Photo' key={p}>
            <img src={p} />
          </div>
        )
      })
    )
  }
}

export default PhotoSet;
