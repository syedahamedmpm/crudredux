import React from "react";
import { connect } from "react-redux";
import {bookadd} from '../actions/fetchData'
import {getbooks} from '../actions/fetchData'

class AddBook extends React.Component{
    constructor(){
        super()
        this.state = {
            id:'',
            booktittle : '',
            author : ''
        }
    }
    handleOnChange = (e) =>{
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] : value
        })
    }
    submitbook = (e) =>{
        const {id,booktittle,author} = this.state
        e.preventDefault();
        this.props.bookadd(id,booktittle,author);
        this.setState({
            id:'',
            booktittle : '',
            author : ''
        })
        this.props.getbooks()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitbook}>
                <div className="form-group">
                <label>Book Name</label>
                <input
                type="text"
                name="booktittle"
                value={this.state.booktittle}
                onChange= {this.handleOnChange}
                />
                </div>
                <div className="form-group">
                <label>Author</label>
                <input
                type="text"
                name="author"
                value={this.state.author}
                onChange= {this.handleOnChange}
                />
                </div>
                <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default connect(
    null,
    {bookadd,getbooks}
) (AddBook);