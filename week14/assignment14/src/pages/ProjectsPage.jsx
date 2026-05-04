import ProjectList from "../components/ProjectList";

function ProjectsPage() {
  return ( 
    <div className="projects-page">
      <h1>All Projects</h1>

      <ProjectList limit={null} />
    </div>
  );
}
export default ProjectsPage;