const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const CHANGE_FILTER = "CHANGE_FILTER";

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

export const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    payload: book,
  };
};

export const changeFilter = (category) => {
  return {
    type: CHANGE_FILTER,
    payload: category,
  };
};

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
