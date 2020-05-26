import React from 'react';

const Form = props => (
    <form onSubmit={props.getBook}>
        <input type = "text" name="bookName" />
        <button id="searchbutton">Search</button>
    </form>
);

export default Form;