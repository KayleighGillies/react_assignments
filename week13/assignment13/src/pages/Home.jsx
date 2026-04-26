import ProjectList from "../components/ProjectList.jsx";
import { projects } from "../data/projectData.js";

function Home() {
  const limitedProjects = projects.slice(0, 2); // Get the first 3 projects from the array
  return <ProjectList projects={limitedProjects} />;
}
export default Home;