import ArtistCard from "./ArtistCard.jsx";
import { artists } from "../data/artistData.js";

/* =========================
   COMPONENT: ArtistList renders a list/grid of ArtistCard components
   Props: - limit (optional): limits the number of artists displayed
   ========================= */
function ArtistList({ limit }) {
  /* =========================
     DATA HANDLING Apply optional limit to the artists array
     ========================= */
  const limitArtists = limit ? artists.slice(0, limit) : artists;
  // - If 'limit' is provided, slice the first N artists
  // - Otherwise, use all artists

  return (
    /* =========================
       GRID CONTAINER  Uses CSS Grid (.artist-grid) to layout cards responsively
       ========================= */
    <div className="artist-grid">
      {/* =========================
          RENDER ARTIST CARDS
          Map each artist object to an ArtistCard component
          - key: unique identifier for React list rendering
          - Pass props for each artist (name, bio, image, url, content)
          ========================= */}
      {limitArtists.map((artist) => (
        <ArtistCard
          key={artist.id} // Unique key for React reconciliation
          artist={artist.artist}
          portrait={artist.portrait}
          image={artist.image}
          url={artist.url}
          content={artist.content}
        />
      ))}
    </div>
  );
}

// Export component for use in other parts of the app
export default ArtistList;