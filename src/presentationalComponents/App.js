import React from "react";
import BooksForm from "../containerComponents/BooksForm";
import BooksList from "../containerComponents/BooksList";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <BooksList />
      <div>
        <BooksForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
