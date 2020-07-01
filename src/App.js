import React, { Component } from 'react';
import Form from "./components/Form"
import Books from "./components/Books"
import Book from "./components/Book"
import BookLib from "./components/BookLib"

const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";


class App extends Component {

  state = {
    books: [],
    book: null,
    error: null
  }

  getBook = async (e) => {
    e.preventDefault();
    const bookName = e.target.elements.bookName.value;
    const apiCall = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`);
    const data = await apiCall.json();

    if (!bookName) {
      this.setState({ error: "Vänligen fyll i sökfältet" })
    } else if (!data.items) {
      this.setState({ error: "Inga böcker hittades" })
    } else {
      this.setState({ books: data.items, error: null })
    }
  }

  selectBook = (book) => {
    this.setState({ book: book });
  }

  onAdd = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <main>
        {this.state.book !== null ?
          <Book book={this.state.book} goBack={() => this.setState({ book: null })} />
          :
          <div><Form getBook={this.getBook} />
            {this.state.error !== null ?
              <div id="errorMsg">
                {this.state.error}
              </div> : <Books books={this.state.books} onAdd={this.onAdd} selectBook={this.selectBook} />}
          </div>}





        <BookLib />


      </main>



    );
  }
}

export default App;