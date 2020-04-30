import React, {useState, useContext, useEffect} from 'react';
import {authContext} from '../../providers/AuthProvider'
import useFormInput from '../../customHooks/useFormInput'
import {Link} from 'react-router-dom'

const UserInfo = () => {
  
  const {user} = useContext(authContext)
  const {handleEdit, handleChange, inputs, setInputs} = useFormInput()

  useEffect( () => {
    document.title = "Profile Settings"
  }, [])


  return (
    <form onSubmit={handleEdit}>
        <p>Name</p>
      <input name='name' onChange={handleChange} type="text" value={inputs.name}/>
        <p>Email</p>
      <input name='email' onChange={handleChange} type="text" value={inputs.email}/>
      <button>Change name and email.</button>
      <Link to='/send-email'>Change your password</Link>
    </form>
  );
};

export default UserInfo;