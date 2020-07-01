import React from 'react';
import { Link } from "react-router-dom";

const apiKey = "AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ";

class Book extends React.Component {
    state = {
        activeBook: []
    }
    componentDidMount = async () => {


        this.setState({ activeBook: this.props.book });
        console.log(this.state.activeBook)

    }

    render() {
        const book = this.state.activeBook;
        return (

            <div className="container">
                <button onClick={() => this.props.goBack()} id="bookButton" >
                    Tillbaka
            </button>
                <div className="active-book">

                    <img src={book.volumeInfo?.imageLinks.thumbnail} alt="A book cover" />
                    <br />
                    Utgivare: <span>{book.volumeInfo?.authors}</span>
                    <p>Länk: <span><a href={book.volumeInfo?.infoLink}>{book.volumeInfo?.title}</a></span> </p>

                </div>
            </div>
        );
    }
};


export default Book;