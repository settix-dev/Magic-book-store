import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Book from "../presentationalComponents/Book";
import CategoryFilter from "../presentationalComponents/CategoryFilter";

// Get state from the redux store
const state = (state) => state.booksCollection;
const filterState = (state) => state.filteredCategory;

const BooksList = () => {
  const [category, setCategory] = useState("");

  // Get books from the store
  const books = useSelector(state).books;
  console.log(books);

  // Store books in local storage
  localStorage.setItem("books", JSON.stringify(books));

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    console.log(`Book id: ${book.id} removed`);
    dispatch({ type: "REMOVE_BOOK", payload: book });
  };

  const filter = useSelector(filterState).filter;
  console.log(filter);

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    console.log(category);
    console.log(e.target.value);
    setCategory(e.target.value === "All" ? "" : e.target.value);
    console.log(category);
  };

  // Render the filtered book by category on the UI
  const displayBook = () => {
    console.log(category);
    return filter === ""
      ? books.map((book, index) => (
        <div key={index} className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
          <Book book={book} handleRemoveBook={handleRemoveBook} />
          </li>
        </ul> 
        </div>
        ))
      : books
          .filter((book) => book.category === filter)
          .map((book, index) => (
            <div key={index} className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <Book book={book} handleRemoveBook={handleRemoveBook} />
              </li>
            </ul> 
            </div>
          ));
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_FILTER", payload: category });
  }, [dispatch, category]);

  return (
    <div>
    {/* <h1>Heading</h1> */}
      {/* <CategoryFilter filter={filter} setCategory={setCategory} /> */}
      <CategoryFilter filter={filter} handleFilterChange={handleFilterChange} />
      <div>
      {displayBook()}
      </div>
    </div>
  );
};

export default BooksList;
