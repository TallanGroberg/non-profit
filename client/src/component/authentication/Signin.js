import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'

const Signup = () => {
  const initState = {name: '', email: '', password: '',}
    const [inputs, setInputs] = useState(initState)
      const {signin} = useContext(authContext)
  
      const handleSubmit = (e) => {
        e.preventDefault()
        signin(inputs)
      }

      const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => ({...prev, [name]: value}))
      }

  return (
    <form onSubmit={handleSubmit}> 
      <input id='signin-name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signin-email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signin-password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signin-submit-button">Signup</button>
    </form>
  );
};

export default Signup;