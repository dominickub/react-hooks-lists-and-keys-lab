import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  console.log(name, technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(techItem => <span key= {techItem}>{techItem}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
