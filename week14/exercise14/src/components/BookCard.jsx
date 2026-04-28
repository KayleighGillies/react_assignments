import { useState } from "react";

function BookCard({ title, author, content, url, image}) {
  const [isRead, setIsRead] = useState(false);
  const [showContent, setShowContent] = useState(false);

  function toggleRead(){
    setIsRead((prevState) => !prevState);
  }

  function toggleContent(){
    setShowContent((prevState) => !prevState);
  } 

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p className="book-card_author">by {author}</p>
      <img src={image} alt={`${title} cover`} className="book-card__image" />
      <a
        href={url}
        className="book-card__url"
        target="_blank"
        rel="noopener noreferrer" /* Security best practice for external links */
      >
        Learn More Here
      </a>

      <button className="book-card__button" onClick={toggleContent}>
        {showContent ? "Hide Content" : "Show Content"}
      </button>
      {showContent &&  
      <p>{content}</p>
      }
      
      <button className="book-card__button" onClick={toggleRead}>
        {isRead ? "Mark as Unread" : "Mark as Read"}
      </button>
      <p>Status: {isRead ? "Read" : "Not Read"}</p>
    </div>
  );
}
export default BookCard;
