import React from 'react'
import PropTypes from 'prop-types';



const Header = ({ title }) => {
    return (
        <header className="header">
        <h1>{title}</h1>
        <button className="btn">اضافه کن</button>
        </header>
    )
}


Header.prototype = {
    title: PropTypes.string.isRequired
}


export default Header;
