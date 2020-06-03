import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Saved from "./Saved"

import App from "../App";
import Book from "./Book";
import BookLib from "./BookLib"

const Router = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/book/:id" component={Book} />
          <Route path="/booklib" exact component={BookLib} />
        </Switch>
      </main>
      <footer>
        <Saved />
      </footer>

    </div>
  </BrowserRouter>


);

export default Router;