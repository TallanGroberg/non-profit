import React, {useContext, useState} from 'react';
import {authContext} from '../providers/AuthProvider'


const useFormInput = () => {
  const initState = {name: '', email: '', password: '',}
  const [inputs, setInputs] = useState(initState)

    const {signup, signin } = useContext(authContext)
    const handleSignup = (e) => {
      e.preventDefault()
      signup(inputs)
    }
    const handleSignin = (e) => {
      e.preventDefault()
      signin(inputs)
    }

    const handleChange = e => {
      const {name, value} = e.target;
      setInputs(prev => ({...prev, [name]: value}))
    }

  return {
      inputs,
      handleSignup,
      handleSignin,
      handleChange,
  }

  ;
};

export default useFormInput;