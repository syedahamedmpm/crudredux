import { BOOK_LIST,ADD_BOOK, DELETE_BOOK } from "./types";


export const bookList = books =>({
type : BOOK_LIST,
payload :books
})

export const addBook = book =>({
    type : ADD_BOOK,
    payload :book
    })

    export const deleteBook = id =>({
        type : DELETE_BOOK,
        payload :id
        })