const CREATE_BOOK = "CREATE_BOOK"
const REMOVE_BOOK = "REMOVE_BOOK"

export const createBook = book => {
    console.log(`I am creating a book!`)
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export const removeBook = book => {
    console.log(`I am removing a book!`)
    return {
        type: REMOVE_BOOK,
        payload: book
    }
}

export {CREATE_BOOK, REMOVE_BOOK}