import { useState } from "react";

function ArtistCard({ artist, portrait, content, url, image}) {
  const [showPortrait, setShowPortrait] = useState(false);
  const [showContent, setShowContent] = useState(false);

  function toggleContent(){
    setShowContent((prevState) => !prevState);
  } 

  return (
    <div className="artist-card">
      
      <button className="artist-card__name-button" onClick={() => setShowPortrait(p => !p)}
        aria-expanded={showPortrait}>
        <span>{artist}</span>
        <span className={`artist-card__chevron artist-card__chevron--up ${showPortrait ? "open" : ""}`}>▼</span>
      </button>
      
      {showPortrait && (
        <div className="artist-card__portrait-panel">
          <img src={portrait} alt={`${artist} portrait`} className="artist-card__portrait" />
        </div>
      )}

      <img src={image} alt={`${artist} artwork`} className="artist-card__image" />

      <div className="artist-card__footer">
        <button className="artist-card__show-button" onClick={() => setShowContent(p => !p)}
          aria-expanded={showContent}>

          <span>{showContent ? "Hide Content" : "Show Content"}</span>
          <span className={`artist-card__chevron artist-card__chevron--down ${showContent ? "open" : ""}`}>▼</span>
        </button>
        
        {showContent && (
          <p className="artist-card__bio">{content}</p>)}
          </div>
  </div>
    );
}
export default ArtistCard;
