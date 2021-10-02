import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>حقوق این سایت متعلق به سیاوش اصغری می باشد.</p>
            <Link to="/about">درباره ما</Link>
        </footer>
    )
}

export default Footer
