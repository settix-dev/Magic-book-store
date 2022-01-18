import React from "react";
import BooksForm from "../containerComponents/BooksForm";
import BooksList from "../containerComponents/BooksList";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container-fluid px-5">
      <BooksList />
      <div>
        <BooksForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
