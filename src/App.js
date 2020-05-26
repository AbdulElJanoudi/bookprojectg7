import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form"
import Books from "./components/Books"

const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";

class App extends Component {
  state  = {
    books: []
  }
  getBook = async (e) => {
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    const apiCall = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`);
  

  const data = await apiCall.json();
  this.setState({ books: data.items });
  console.log(this.state.books)

  }
  render() {
  return (
    <div className="App">
      <h1> Our React App</h1>
      <h3> Authors: Simon, Abdul, Sofie</h3>
      <Form getBook={this.getBook}/>
      <Books books={this.state.books}/>
    </div>
  );
  }
}

export default App;
