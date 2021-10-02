import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';




const Header = ({ title, onAdd, textName }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color={textName ? "red" : "green"}
                text={textName ? "بستن" : "اضافه کردن"}
                onClick={onAdd}
            />
        </header>
    )
}


Header.prototype = {
    title: PropTypes.string.isRequired
}


export default Header;
