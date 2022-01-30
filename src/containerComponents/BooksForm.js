import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
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

const authors = ["John", "Joe", "Michael", "Judith", "Rosco"];
const BooksForm = (props) => {
  const [bookTitle, setBookTitle] = useState("");
  const [category, setCategory] = useState("");
  // const dispatch = useDispatch();
  const { myCreateBook } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bookTitle, category });

    let progress = Math.round(Math.random() * 100);
    let author = authors[Math.round(Math.random() * 4)];
    const book = { bookTitle, category, progress: `${progress}%`, author };
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
      <h4 className="text-secondary">ADD NEW BOOK</h4>
      <form
        className="book-form d-flex justify-content-between align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          name="bookTitle"
          type="text"
          placeholder="Type book title here"
          value={bookTitle}
          onChange={handleChange}
          className="w-50 py-2 px-3 book-title-input text-secondary"
        />

        <select
          className="w-25 book-select py-2 px-3 text-secondary mx-4"
          name="category"
          value={category}
          onChange={handleSelect}
        >
          {booksCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <Button className="btn-primary submit-btn w-25" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    myCreateBook: (bookPayload) => {
      dispatch(createBook(bookPayload));
    },
  };
};

export default connect(null, mapDispatchToProps)(BooksForm);
