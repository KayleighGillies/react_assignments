import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData.js";

function ProjectsPage() {
  return ( 
    <div className="projects-page">
      <ProjectList projects={projects} />
    </div>
  );
}

export default ProjectsPage;