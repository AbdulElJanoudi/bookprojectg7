import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Home from "./components/Home"
import MovieLib from "./components/MovieLib"
import Form from "./components/Form"
import Books from "./components/Books"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";

class App extends Component {
  state = {
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
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>

          <nav>
            <Nav />
          </nav>

          <main>
            <Switch>
              <Route path="/movielib" exact component={MovieLib} />
              <Route path="/" exact component={Home} />
            </Switch>
            <Form getBook={this.getBook} />
            <Books books={this.state.books} />
          </main>

          <footer>
            <Footer />
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
