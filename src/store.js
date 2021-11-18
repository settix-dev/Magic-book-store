import { createStore } from "redux";
import rootReducer from "./reducers";

const id1 = Math.floor((Math.random() * 100)) + 1 
const id2 = Math.floor((Math.random() * 100)) + 1 
const id3 = Math.floor((Math.random() * 100)) + 1 
console.log(id1, id2, id3)

const initialState = { books:
    [
        {id: id1, bookTitle: "React", category: "Frontend-Library"},
        {id: id2, bookTitle: "Redux", category: "State-Management"},
        {id: id3, bookTitle: "Bible", category: "Theology"}
    ]
}

console.log(initialState)

const store = createStore(rootReducer, initialState)

export default store