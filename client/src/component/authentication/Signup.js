import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import useFormInput from '../customHooks/useFormInput'
import {Link} from 'react-router-dom'

const Signup = () => {

  const {inputs, handleSignup, handleChange} = useFormInput()
  const {error} = useContext(authContext)
  
  return (<>
    <form onSubmit={handleSignup}> 
      <input id='signup-name' placeholder='name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signup-email' placeholder='email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signup-password' placeholder='password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signup-submit-button">Signup</button>
      
      
    </form>
      <Link id='link-to-signup' to='/signin'>already have an account?</Link>
      {error.length > 0 && error.map( err => {
      if(err === 'Request failed with status code 400') {
        return <p style={{color: 'red'}}>status 400: Username already taken.</p>
      } else if (err = 'Request failed with status code 500') {
        return <p style={{color: 'red'}}> Username or password have already been taken. </p>
      } else if (err = 'Request failed with status code 401') {
        return <p style={{color: 'red'}}> Username or password have already been taken. </p>
      }
    } )}
  </>);
};

export default Signup;