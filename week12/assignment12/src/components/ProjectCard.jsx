function ProjectCard({ title, author, image, url, description }) { 
  const isVideo = image?.endsWith('.mp4');
  
  return (
    <article className="project-card">
        <h4>{title}</h4> by {author}
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
        <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
        <p>{description}</p>  
    </article>
  );
}
export default ProjectCard;