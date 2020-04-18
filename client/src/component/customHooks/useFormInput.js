import React, {useContext, useState} from 'react';
import {authContext} from '../providers/AuthProvider'


const useFormInput = () => {
  const {signup, signin, setError, editUser, user, } = useContext(authContext)
  
  
  const initState = {name: user.name, email: user.email, password: '',}
  const [inputs, setInputs] = useState(initState)

    const handleSignup = (e) => {
      e.preventDefault()
      signup(inputs)
    }
    const handleSignin = (e) => {
      e.preventDefault()
      signin(inputs)
    }

    const handleEdit = (e) => {
      e.preventDefault()
      console.log('handleEdit')
      delete inputs.password
      editUser(inputs)
    } 
    
    const handleChange = e => {
      const {name, value} = e.target;
      setInputs(prev => ({...prev, [name]: value}))
      setError([])
    }

  return {
      inputs,
      setInputs,
      handleSignup,
      handleSignin,
      handleChange,
      handleEdit,
  }

  ;
};

export default useFormInput;