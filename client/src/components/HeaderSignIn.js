import React from 'react'
import '../css/header-sign-in.css'

function HeaderSignIn() {
    return (
        <div className='sign-in-container'>
            <p>Sign up for full access and to recieve our newsletter.</p>
            <div>
                <button className='button-default'><p>REGISTER</p></button>
                <button className='button-outline'><p>SIGN IN</p></button>
            </div>
        </div>
    )
}

export default HeaderSignIn