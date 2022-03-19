import {ADD_BOOK, BOOK_LIST, DELETE_BOOK} from '../actions/types'

const initialstate = {
    books:[]
};

const booksReducer = (state = initialstate,action) =>{
    
switch(action.type){
    case BOOK_LIST:
    return {
        ...state,
        books : action.payload
        
    };
    
    case ADD_BOOK:
    return {
        ...state,
        book : action.payload
        
    };

    default:
    return {...state};
}
}
export default booksReducer;