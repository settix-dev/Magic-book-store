import React from "react";
import { useSelector } from "react-redux";
import Book from "../presentationalComponents/Book";

const selectBooks = (state) => state.books;

const BooksList = () => {
  const books = useSelector(selectBooks);

  return (
    <div>
      <h3>Books List</h3>
      {books.map((book) => (
        <Book
          key={book.id}
          bookId={book.id}
          title={book.bookTitle}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default BooksList;
