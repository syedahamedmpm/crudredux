import React from "react";
import { connect } from "react-redux";
import {getbooks} from '../actions/fetchData';
import {bookdelete} from '../actions/fetchData'
class BookList extends React.Component{
    
    componentDidMount() {
        console.log("I am working")
        this.props.getbooks();
        
      }
      handleDelete (id) {
          console.log(id)
          this.props.bookdelete(id);
      }
      
    render(){
        const {books} = this.props;
        console.log(books)
        return(
            <div>
                {books.map(book =>(
                        <p key={book.id}>{book.id}.{book.booktittle} Written By {book.author}<button className="btn btn-primary" onClick={()=>this.handleDelete(book.id)} >Delete</button></p>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
  });

export default connect(
    mapStateToProps,
    {bookdelete,getbooks}
) (BookList);