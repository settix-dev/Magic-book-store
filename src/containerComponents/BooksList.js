import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Book from "../presentationalComponents/Book";

const state = (state) => state.booksCollection;

const BooksList = ({ handleRemoveBook }) => {
  const books = useSelector(state).books;
  console.log(books);

  const dispatch = useDispatch();

  handleRemoveBook = (book) => {
    console.log(`Book id: ${book.id} removed`);
    dispatch({ type: "REMOVE_BOOK", payload: book });
  };

  // const {bookId, title, category} = book
  return (
    <div>
      <h3>Books List</h3>
      {books.map((book, index) => (
        <div key={index}>
          <Book book={book} handleRemoveBook={handleRemoveBook} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
