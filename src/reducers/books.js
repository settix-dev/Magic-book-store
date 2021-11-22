import { CREATE_BOOK, REMOVE_BOOK } from "../actions/index";

const initialState = {
  books: []
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
            id: Math.floor(Math.random() * 100) + 1,
            text: action.payload.bookTitle,
            category: action.payload.category,
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
