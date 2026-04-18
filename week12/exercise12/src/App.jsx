import "./css/app.css";
import BookCard from "./components/BookCard.jsx";
import Footer from "./components/Footer.jsx";
import { books } from "./data/bookData.js";

function App() {
  return (
    <div>
      <h1>Kayleigh's Book List</h1>
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} content={book.description} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
