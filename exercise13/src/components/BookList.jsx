import BookCard from "./BookCard.jsx";
import { books } from "../data/bookData.js";

/* =========================
   COMPONENT: BookList renders a list/grid of BookCard components
   Props: - limit (optional): limits the number of books displayed
   ========================= */
function BookList({ limit }) {
  /* =========================
     DATA HANDLING Apply optional limit to the books array
     ========================= */
  const limitBooks = limit ? books.slice(0, limit) : books;
  // - If 'limit' is provided, slice the first N books
  // - Otherwise, use all books

  return (
    /* =========================
       GRID CONTAINER  Uses CSS Grid (.book-grid) to layout cards responsively
       ========================= */
    <div className="book-grid">
      {/* =========================
          RENDER BOOK CARDS
          Map each book object to a BookCard component
          - key: unique identifier for React list rendering
          - Pass props for each book (title, author, image, link, description)
          ========================= */}
      {limitBooks.map((book) => (
        <BookCard
          key={book.id} // Unique key for React reconciliation
          title={book.title}
          author={book.author}
          image={book.image}
          url={book.url}
          content={book.content}
        />
      ))}
    </div>
  );
}

// Export component for use in other parts of the app
export default BookList;