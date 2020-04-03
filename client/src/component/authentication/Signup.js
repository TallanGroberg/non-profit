import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import useFormInput from '../customHooks/useFormInput'
import {Link} from 'react-router-dom'

const Signup = () => {

  const {inputs, handleSignup, handleChange} = useFormInput()
  

  return (
    <form onSubmit={handleSignup}> 
      <input id='signup-name' placeholder='name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signup-email' placeholder='email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signup-password' placeholder='password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signup-submit-button">Signup</button>
      
      <Link id='link-to-signup' to='/signin'>already have an account?</Link>
    </form>
  );
};

export default Signup;