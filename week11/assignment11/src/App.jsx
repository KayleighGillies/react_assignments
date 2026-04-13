import './css/app.css'
function ProjectCard(props) { 
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>  
    </div>
  );
}
function App() {
  return (
    <div>
      <p>Hello World</p>
      <ProjectCard name="Project Name" description="Project Description" />
    </div>
  );
}

export default App;




        