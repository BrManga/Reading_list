import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "../components/BookDetails";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <ul className="book-list">
      {books.map(book => {
        return (
          <BookDetails book={book} key={book.id}>
            {" "}
          </BookDetails>
        );
      })}
    </ul>
  ) : (
    <div className="empty">No books to read</div>
  );
};

export default BookList;
