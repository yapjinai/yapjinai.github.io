import React from 'react';

const WebProject = ({project}) => {
  return (
    <div className="WebProject">
      <a href={project.link}>
        <h2>{project.name}</h2>
      </a>
      <p>{project.description}</p>

      {renderPreview(project)}
    </div>
  );
}

const renderPreview = (project) => {
  if (project.demo) {
    return (
      <video src={project.demo} controls>
        Your browser does not support the video tag.
      </video>
    )
  }
  else if (project.screenshot) {
    return (
      <a href={project.link}>
        <img src={project.screenshot} alt={project.name} />
      </a>
    )
  }
}

export default WebProject;
