import React from 'react';
import { Link } from "react-router-dom";




const Books = props => (

  <div id="wrapper">
    {props.books.map((book) => {
      return (


        <figure id="book_container" key={book.id}>
          <img src={
            book.volumeInfo.imageLinks === undefined
              ? null
              : `${book.volumeInfo.imageLinks.thumbnail}`} alt="A book cover" />
          <p>{book.volumeInfo.title}</p>
          <button id="bookButton">
            <Link to={{
              pathname: `/book/${book.id}`,
              state: { book: book.volumeInfo.title }
            }} >Visa bok</Link>
          </button>

          <button onClick={added} id="addBtn">
            Lägg till bok
            </button>
        </figure>
      )

      function added() {
        window.alert("Boken lades till (Uppdatera sidan för att se)")
        var data = localStorage.getItem('myBookId');
        var allMyIds = data ? JSON.parse(data) : [];
        allMyIds.push(book.id)
        localStorage.setItem('myBookId', JSON.stringify(allMyIds));

      }
    })}
  </div>
);

export default Books;