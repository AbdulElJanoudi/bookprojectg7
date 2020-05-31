import React, { Component } from 'react';
import Form from "./components/Form"
import Books from "./components/Books"
import { thistle } from 'color-name';



const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";

class App extends Component {
  state = {
    books: [],

    error: null
  }
  getBook = async (e) => {
    e.preventDefault();
    const bookName = e.target.elements.bookName.value;
    const apiCall = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`);
    const data = await apiCall.json();

    if (!bookName) {
      this.setState({ error: "Vänligen fyll i sökfältet"})
    } else {
      this.setState({books: data.items, error: null })
    }
  }
  render() {
    return (
          <main>
            <Form getBook={this.getBook} />
          
            {
              this.state.error !== null ? 
              <div id="errorMsg">
              { this.state.error}
              </div> : <Books books={this.state.books} />
            }
          </main>
    );
  }
}

export default App;
