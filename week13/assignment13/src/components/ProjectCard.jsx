import { useState } from "react";

function ProjectCard({ title, author, image, url, description }) { 
  const isVideo = image?.endsWith('.mp4');
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription((prev) => !prev); // Flip true/false
  }

  return (
    <article className="project-card">
      <header>
        <h2 className="project-card__title">{title}</h2> 
        <p className="project-card__author">by {author}</p>
      </header>
        {isVideo ? (
          <video 
            src={image}
            className="project-image"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={image} alt={title} className="project-image"/>
        )}
        <a href={url} className="project-card__link" target="_blank" rel="noopener noreferrer">Explore the Project</a> 
        
        <button className="project-card__button" onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      
      {showDescription && (
        <p className="project-card__description">{description}</p>
      )} 
    </article>
  );
}
export default ProjectCard;