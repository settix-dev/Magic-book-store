import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { createBook } from "../actions";

export const booksCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const BooksForm = (props) => {
  const [bookTitle, setBookTitle] = useState("");
  const [category, setCategory] = useState("");
  // const dispatch = useDispatch();
  const {myCreateBook} = props
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bookTitle, category });

    const book = { bookTitle: bookTitle, category: category };
    console.log(book);

    // Dispatch the "book created" action with the new book
    // dispatch({ type: "CREATE_BOOK", payload: book });
    myCreateBook(book);
    setBookTitle("");
    setCategory("");
  };

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="div-form">
      <h3>ADD NEW BOOK</h3>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          name="bookTitle"
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={handleChange}
        />
        <select name="category" value={category} onChange={handleSelect}>
          {booksCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    myCreateBook: (bookPayload) => {
   dispatch( createBook(bookPayload))
    }
  }
}

export default connect(null, mapDispatchToProps)(BooksForm);
