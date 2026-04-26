import BookList from "../components/BookList.jsx";


function Home() {
  return (
    <BookList limit={3} />
  );
}
export default Home;