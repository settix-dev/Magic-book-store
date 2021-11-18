import { booksCategories } from "../containerComponents/BooksForm";
import { CREATE_BOOK, REMOVE_BOOK } from "../actions/index";

const initialState = [];

function nextBookId(books) {
  const maxId = books.reduce((bookId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: nextBookId(state),
          text: action.payload,
          category: booksCategories[0], // initialized to this for now
        },
      ];
    case REMOVE_BOOK:
      return [...state, state.filter((book) => state.id !== book.id)];
    default:
      return state;
  }
};

export default booksReducer;
