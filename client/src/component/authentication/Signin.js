import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import { useHistory, useLocation, Link } from 'react-router-dom';
import useFormInput from '../customHooks/useFormInput'

const Signin = (props) => {
  
  const {inputs, handleSignin, handleChange} = useFormInput()


  return (<>
    <form onSubmit={handleSignin}> 
      <input id='signin-name'
        placeholder='name'
        type="text" 
        name='name'
        value={inputs.name} 
        onChange={handleChange}/>
      <input id='signin-email'
        placeholder='email' 
        type="text"
        name='email' 
        value={inputs.email} 
        onChange={handleChange}/>
      <input id='signin-password'
        placeholder='password' 
        type="password" 
        name='password' 
        value={inputs.password} 
        onChange={handleChange}/>
      <button id="signin-submit-button">Signin</button>
    </form>
    <Link id='link-to-signup' to='/signup'>Dont have an account?</Link>
  </>);
};

export default Signin;