function BookCard({ title, author, content}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
}
export default BookCard;
