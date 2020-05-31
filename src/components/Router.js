import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"

import App from "../App";
import Book from "./Book";
import BookLib from "./BookLib"

const Router = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <Header />
      </header>

      <nav>
        <Nav />
      </nav>
      <main>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/book/:id" component={Book} />
          <Route path="/booklib" exact component={BookLib} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  </BrowserRouter>


);

export default Router;