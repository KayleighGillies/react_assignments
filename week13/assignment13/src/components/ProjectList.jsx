import ProjectCard from "./ProjectCard.jsx";

function ProjectList({projects}) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
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