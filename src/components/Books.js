import React from 'react';

import { Link } from "react-router-dom";


const Books = props => (
    <div id="wrapper">
        {props.books.map((book) =>{
        return (
          <div id="book_container" key = {book.id}>
            <img src={
                book.volumeInfo.imageLinks === undefined
                ? null
                : `${book.volumeInfo.imageLinks.thumbnail}`} alt="A book cover" />
            <p>{ book.volumeInfo.title }</p>
            <button id="bookButton">
            <Link to={{
              pathname: `/book/${book.id}`,
              state: { book: book.volumeInfo.title }
              }} >Visa bok</Link>
            </button> 
          </div>
        )
      })}
    </div>
);

export default Books;