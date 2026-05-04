import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projectData.js"

function ProjectList({limit}) {
  
  const projectsToDisplay = limit ? projects.slice(0, limit) : projects;
  
  return (
    <div className="project-grid">
      {projectsToDisplay.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          author={project.author}
          image={project.image}
          url={project.url}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;