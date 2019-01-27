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
          {this.renderPhotos(project)}
        </div>
      </div>
    );
  }

  //////////////////////


  renderPhotos = (project) => {
    if (project.columns > 1) {
      const photos = [...project.photos];

      const divs = [];
      for (let i = 0; i < photos.length; i += project.columns) {
        const imgs = [];
        for (let j = 0; j < project.columns; j++) {
          if (photos[i+j]) {
            imgs.push(
              <img src={photos[i+j]} />
            )
          }
        }

        const div = (
          <div className='Photo row' key={i}>
            {imgs}
          </div>
        )
        divs.push(div)
      }

      return divs;
    }

    else {
      return (
        project.photos.map(p => {
          return (
            <div className='Photo' key={p}>
              <img src={p} />
            </div>
          )
        })
      )
    }
  }
}

export default PhotoSet;
