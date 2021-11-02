import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItemReturn= projects.map(project => <ProjectItem name = {project.name} technologies={project.technologies} about= {project.about}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItemReturn}</div>
    </div>
  );
}

export default ProjectList;
