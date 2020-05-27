import React from 'react';

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
          </div>
        )
      })}
    </div>
);

export default Books;