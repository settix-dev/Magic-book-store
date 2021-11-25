import React from "react";
import BooksForm from "../containerComponents/BooksForm";
import BooksList from "../containerComponents/BooksList";
import CategoryFilter from "./CategoryFilter";

const App = () => {
  return (
    <div>
      <h1>Magic Books Inc</h1>
      <BooksList />
      <div>
      <BooksForm />
      </div>
    </div>
  );
};

export default App;
