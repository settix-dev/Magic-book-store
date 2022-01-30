import uuid from "uuid";
import { CREATE_BOOK, REMOVE_BOOK } from "../actions/index";

const initialState = {
  books: [
    {
      id: uuid(),
      text: "React",
      category: "Learning",
      progress: "32%",
      author: "Lamech",
    },
    {
      id: uuid(),
      text: "Single-spa",
      category: "Learning",
      progress: "51%",
      author: "Roy",
    },
    {
      id: uuid(),
      text: "Parenting",
      category: "Kids",
      progress: "78%",
      author: "Elijah",
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      console.log(state);
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: uuid(),
            text: action.payload.bookTitle,
            category: action.payload.category,
            progress: action.payload.progress,
            author: action.payload.author,
          },
        ],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
