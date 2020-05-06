import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import { useHistory, useLocation, Link } from 'react-router-dom';
import useFormInput from '../customHooks/useFormInput'
import styled from 'styled-components'

const Signin = (props) => {
  
  const {inputs, handleSignin, handleChange, } = useFormInput()
  const {error} = useContext(authContext)


  return (<>
  <SigninStyle>

  
    <form className='sign-in' onSubmit={handleSignin}> 
      <input id='signin-name'
        placeholder='name'
        type="text" 
        name='name'
        value={inputs.name} 
        onChange={handleChange}/>
      <input id='signin-email'
        placeholder='email' 
        type="email"
        name='email' 
        value={inputs.email} 
        onChange={handleChange}/>
      <input id='signin-password'
        placeholder='password' 
        type="password" 
        name='password' 
        value={inputs.password} 
        onChange={handleChange}/>
      <button data-testid="signin-submit-button">Signin</button>
    </form>
    <Link to='/send-email'>forgot your password?</Link>
    <Link data-testid='link-to-signup' to='/signup'>Dont have an account?</Link>
    {error.length > 0 && error.map( err => {
      if(err === 'Request failed with status code 403') {
        return <p style={{color: 'red'}}>status 403: Username or password is incorrect.</p>
      } else if (err = 'Request failed with status code 500') {
        return <p style={{color: 'red'}}>status 500: server did not respond properly. if the proplem persists contact the site administator.</p>
      }
    } )}
  </SigninStyle>
  </>);
};

const SigninStyle = styled.div`

display: flex;
flex-direction: column;
height: 84vh;
justify-content: space-around;

> .sign-in  {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 41vh;
  margin-top: 106px;
  top: 0;
}

`;

export default Signin;