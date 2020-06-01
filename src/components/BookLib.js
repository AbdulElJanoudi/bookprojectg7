import React from 'react';


class BookLib extends React.Component {
    state = {
        apiResponse: []
    }
    componentDidMount = async () => {
        for (var i = 0; i < localStorage.length; i++) {
            var favBooks = (localStorage.getItem(localStorage.key(i)));
            var favBooksParsed = JSON.parse(favBooks)
        }

        for (i = 0; i < favBooksParsed.length; i++) {
            const request = await fetch(`https://www.googleapis.com/books/v1/volumes/${favBooksParsed[i]}?key=AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ`);
            const respond = await request.json();
            const currentStateCopy = [...this.state.apiResponse]
            currentStateCopy.push(respond)
            this.setState({
                apiResponse: currentStateCopy

            })
            console.log(this.state.apiResponse)
        }
    }

    render() {
        
        const myBook = this.state.apiResponse;
        return (
            <div className="container">
                <div className="active-book">
                    <h3> Din sparade böcker</h3>
                    <img src={myBook.volumeInfo?.imageLinks.thumbnail} alt="A book cover" />
                    <br />
                Titel <span>{myBook.volumeInfo?.authors}</span>
                  

                </div>

            </div>
        );
    }
};

export default BookLib;