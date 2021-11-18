const CREATE_BOOK = "CREATE_BOOK"
const REMOVE_BOOK = "REMOVE_BOOK"

export const createBook = book => {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export const removeBook = book => {
    return {
        type: REMOVE_BOOK,
        payload: book.id
    }
}

export {CREATE_BOOK, REMOVE_BOOK}