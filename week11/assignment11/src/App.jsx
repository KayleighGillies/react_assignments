import './css/app.css'

function Header() {
  return (
    <header>  
      <h1>Portfolio</h1>
    </header>
  );
}

function ProjectCard(props) { 
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>  
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Kayleigh Gillies 2026</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <p>Hello World</p>
      <ProjectCard name="Project One" description="Project Description" />
      <ProjectCard name="Project Two" description="Project Description" />
      <ProjectCard name="Project Three" description="Project Description" /> 
      <Footer />  
    </div>

  );
}

export default App;




        