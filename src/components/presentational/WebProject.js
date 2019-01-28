import React from 'react';

import link from '../../img/web/link.png';

const WebProject = ({project}) => {
  return (
    <div className="WebProject">
        <h2>
        <a href={project.link}>
          {project.name}
          <img className='link' src={link} alt={project.name} />
          </a>
        </h2>
      <h5>
        <a href={project.backend}>Backend</a> | <a href={project.frontend}>Frontend</a>
      </h5>
      <p>{project.description}</p>

      {renderPreview(project)}
    </div>
  );
}

const renderPreview = (project) => {
  if (project.demo) {
    return (
      <video className='demo' src={project.demo} controls>
        Your browser does not support the video tag.
      </video>
    )
  }
  else if (project.screenshot) {
    return (
      <a href={project.link}>
        <img className='demo' src={project.screenshot} alt={project.name} />
      </a>
    )
  }
}

export default WebProject;
