import { combineReducers } from "redux";
import booksReducer from "./books";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  booksCollection: booksReducer,
  filteredCategory: filterReducer
});

export default rootReducer;
