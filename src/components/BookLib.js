
import React from 'react'


var myData = {}


async function getMyBooks() {
    for (var i = 0; i < localStorage.length; i++) {
        var favBooks = (localStorage.getItem(localStorage.key(i)));
        var favBooksParsed = JSON.parse(favBooks)

        for (i = 0; i < favBooksParsed.length; i++) {
            const url = (`https://www.googleapis.com/books/v1/volumes/${favBooksParsed[i]}?key=AIzaSyDc84mT8wa9h5Tcf8Kp17u1z-6eq201eFQ`);
            const response = await fetch(url);
            const data = await response.json();
            myData.content = data
            let myDiv = document.createElement('div')
            let img = document.createElement('img');
            let myP = document.createElement('p');
            let myFigure = document.createElement('figure');
            myFigure.setAttribute("id", "myFigure")
            myFigure.appendChild(img)
            myFigure.appendChild(myP)
            myP.innerHTML = (myData.content.volumeInfo.title)
            img.src = (myData.content.volumeInfo.imageLinks.thumbnail)


            document.body.appendChild(myDiv)
            myDiv.appendChild(myFigure)


        }
    }

}
export default function BookLib() {
    return (

        <> </>

    );
}
getMyBooks()
