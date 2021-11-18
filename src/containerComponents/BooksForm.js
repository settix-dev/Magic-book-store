import React, { useState } from "react";

export const booksCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const BooksForm = () => {
  const [bookTitle, setBookTile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bookTitle });
    setBookTile("");
  };

  const handleChange = (e) => {
    setBookTile(e.target.value);
  };

  return (
    <div>
      <h3>Books Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={handleChange}
        />
        <select>
          {booksCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BooksForm;
