import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import { useHistory, useLocation, Link } from 'react-router-dom';

const Signup = (props) => {
  const initState = {name: '', email: '', password: '',}
    const [inputs, setInputs] = useState(initState)
      const {signin} = useContext(authContext)
      const history = useHistory()
      const location = useHistory()
      
  
      const handleSubmit = (e) => {
        e.preventDefault()
        signin(inputs)
      }

      const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => ({...prev, [name]: value}))
      }

  return (<>
    <form onSubmit={handleSubmit}> 
      <input id='signin-name' placeholder='name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signin-email' placeholder='email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signin-password' placeholder='password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signin-submit-button">Signin</button>
    </form>
    <Link to='/signup'>Dont have an account?</Link>
  </>);
};

export default Signup;