import React from 'react';

const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";

class Book extends React.Component {
    state = {
        activeBook: []
    }
    componentDidMount = async () => {
    const title = this.props.location.state.book;
    const request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`);


    const respond = await request.json();
    this.setState ({ activeBook: respond.items[0]});
    console.log(this.state.activeBook)
 
   }

    render() {
        const book = this.state.activeBook;
        return (
            <div className="container">
                <div className="active-book">
                <img src={book.volumeInfo?.imageLinks.thumbnail} alt="A book cover" />
                Publisher: <span>{book.volumeInfo?.authors}</span>
                <p>Länk: <span><a href={book.volumeInfo?.infoLink}>{book.volumeInfo?.title}</a></span> </p>

                </div>
            </div>
        );
    }
};

export default Book;