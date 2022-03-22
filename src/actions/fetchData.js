import * as http from '../api/api';
import { bookList } from './bookActions';
import { addBook } from './bookActions';
import { deleteBook } from './bookActions';
import { updateBook } from './bookActions';
import { getOneBook } from './bookActions';



export function bookadd (id,booktittle,author){
  return dispatch => {
    let body = {
      id: id,
      booktittle: booktittle,
      author: author
    }
    console.log(body)
  http 
    .booksAdd(body,"books")
    .then((resp) => resp.json())
    .then(data=>{
      dispatch(addBook(data));
      console.log("ADD Books")
    })
}
}

export function bookdelete(id){
  return dispatch =>{
    http 
    .booksDelete(id,"books")
    .then((resp) => resp.json())
    .then(data=>{
      dispatch(deleteBook(data));
      console.log("Delete Books")
    })   
}
  }

  export function bookupdate(){
    return dispatch =>{
      http
      .booksUpdate("books")
      .then((resp) =>resp.json())
      .then(data=>{
        dispatch(updateBook(data));
      })
    }
  }

  export function getbooks (){
    return dispatch => {
    http
    .booksGet("books")
    .then((resp)=>resp.json())
    .then(data =>{
      dispatch(bookList(data));
      console.log("Get Books")
        return data;
    })
  }
}
export function Onebookget (){
  return dispatch => {
  http
  .booksGet("books")
  .then((resp)=>resp.json())
  .then(data =>{
    dispatch(getOneBook(data));
    console.log("Get One Books")
      return data;
  })
}
}