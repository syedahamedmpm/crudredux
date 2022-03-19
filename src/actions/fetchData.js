import * as http from '../api/api';
import { bookList } from './bookActions';
import { addBook } from './bookActions';
export function getbooks (){
    return dispatch => {
    http
    .booksGet("books")
    .then((resp)=>resp.json())
    .then(data =>{
      console.log(data)
      console.log(dispatch(bookList(data)))
      dispatch(bookList(data));
        return data;
    })
  }
}


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
      console.log(data)
      dispatch(addBook(data));
      console.log(dispatch(addBook(data)))
    })
}
}
