import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeFilter, removeBook } from "../actions";
import Book from "../presentationalComponents/Book";
import CategoryFilter from "../presentationalComponents/CategoryFilter";

// Get state from the redux store
// const state = (state) => state.booksCollection;
// const filterState = (state) => state.filteredCategory;

const BooksList = (props) => {
  const [category, setCategory] = useState("");
  const {
    myBooksCollection,
    myFilteredCategory,
    myRemoveBook,
    myChangeFilter,
  } = props;
  // Get books from the store
  // const books = useSelector(state).books;
  const books = myBooksCollection.books;
  console.log(books);

  // Store books in local storage
  localStorage.setItem("books", JSON.stringify(books));

  // const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    console.log(`Book id: ${book.id} removed`);
    myRemoveBook(book);
  };

  // const filter = useSelector(filterState).filter;
  const filter = myFilteredCategory.filter;
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
    myChangeFilter(category);
  }, [myChangeFilter, category]);

  return (
    <div>
      <header className="d-flex align-items-center px-5 py-3 justify-content-between">
        <div className="d-flex align-items-center">
          <h2 className="ps-4 text-primary">Magic Book Store</h2>
          {/* <CategoryFilter filter={filter} setCategory={setCategory} /> */}
          <CategoryFilter
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <span className="d-flex align-items-center justify-content-center me-3 border rounded-circle text-primary">
          <i class="fas fa-user"></i>
        </span>
      </header>

      <div className="books-list-div">
      {displayBook()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBooksCollection: state.booksCollection,
    myFilteredCategory: state.filteredCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myRemoveBook: (bookPayload) => {
      dispatch(removeBook(bookPayload));
    },

    myChangeFilter: (filterPayload) => {
      dispatch(changeFilter(filterPayload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
