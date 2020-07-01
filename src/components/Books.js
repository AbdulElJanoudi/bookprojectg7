import React from 'react';
import { Link } from "react-router-dom";

const Books = props => (
  < div id="wrapper" >
    {
      props.books.map((book) => {
        return (

          <figure id="book_container" key={book.id}>
            <img src={
              book.volumeInfo.imageLinks === undefined
                ? null
                : `${book.volumeInfo.imageLinks.thumbnail}`} alt="A book cover" />
            <p>{book.volumeInfo.title}</p>
            <button onClick={() => props.selectBook(book)} id="bookButton" >
              Visa bok
            </button>

            <button onClick={added} id="addBtn">
              Lägg till bok
            </button>
          </figure>
        )

        function added() {
          window.alert("Boken lades till")
          var data = localStorage.getItem('myBookId');
          var allMyIds = data ? JSON.parse(data) : [];
          allMyIds.push(book.id)
          localStorage.setItem('myBookId', JSON.stringify(allMyIds));
          props.onAdd();
        }
      })
    }
  </div >
);

export default Books;