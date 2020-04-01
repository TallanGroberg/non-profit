import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'

const Signup = () => {
  const initState = {name: '', email: '', password: '',}
    const [inputs, setInputs] = useState(initState)
      const {signup} = useContext(authContext)
  
      const handleSubmit = (e) => {
        e.preventDefault()
        signup(inputs)
      }

      const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => ({...prev, [name]: value}))
      }

  return (
    <form onSubmit={handleSubmit}> 
      <input id='signup-name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signup-email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signup-password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button>Signup</button>
    </form>
  );
};

export default Signup;