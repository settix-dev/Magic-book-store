import { combineReducers } from "redux";
import booksReducer from "./books";

const rootReducer = combineReducers({
  booksCollection: booksReducer,
});

export default rootReducer;
