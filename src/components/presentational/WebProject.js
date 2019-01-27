import React from 'react';

import link from '../../img/web/link.png';

const WebProject = ({project}) => {
  return (
    <div className="WebProject">
      <a href={project.link}>
        <h2>
          {project.name}
          <img className='link' src={link} alt={project.name} />
        </h2>
      </a>
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
