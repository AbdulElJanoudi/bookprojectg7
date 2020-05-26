import React from 'react';

const Books = props => (
    <div>
        {props.books.map((book) =>{
        return (
          <div key = {book.id}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <p>{ book.volumeInfo.title }</p>
          </div>
        )
      })}
    </div>
);

export default Books;