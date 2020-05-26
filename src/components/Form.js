import React from 'react';

const Form = props => (
    <form onSubmit={props.getBook}>
        <input id="searchbar" type = "text" name="bookName" placeholder="Sök bok..." />
        <button id="searchbutton">Search</button>
    </form>
);

export default Form;