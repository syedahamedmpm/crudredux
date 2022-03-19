import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BooKList';
import store from './store';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <BookList/>
        <AddBook/>
      </div>
      </Provider>
    );
  }
}

export default App;
