import React from 'react'
import HeaderSignIn from './HeaderSignIn'
import '../css/header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='hamburger-menu-container'>
                <p>Menu</p>
            </div>
            <div className='logo-container'></div>
            <HeaderSignIn />
        </div>
    )
}

export default Header