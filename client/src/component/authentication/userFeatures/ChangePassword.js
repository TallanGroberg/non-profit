import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const ChangePassword = (props) => {
    const [inputs, setInputs] = useState({password: '', confirmPassword: ''})
    const [response,setResponse] = useState('')
    const [user, setUser] = useState({})
      console.log(user)
      const {_id} = props.match.params

      useEffect( () => {
        axios.get(`/user/${_id}`)
        .then(res => {
          setUser(res.data)
        })
      },[])

    const handleChange = (e) => {
      const {name, value} = e.target;
      setInputs(prev => ({...prev, [name]: value}))
    } 

    const handleSubmit = (e) => {
      e.preventDefault()
      if(inputs.password === inputs.confirmPassword){

        axios.put(`/user/${_id}`, {password: inputs.password})
        .then(res => {
          console.log(res)
          setResponse('you have successfully changed your password')
        })
        .catch(err => {
          setResponse('there was an error cannot change password at this time.')
        })
      } else {
        setResponse('password and password confirm dont match')
      }
      }
      


  return (
    <>
      <h4>Welcome back {user.name}</h4>
      <p>
        Change Password
      </p>

      <form onSubmit={handleSubmit}>

        <input type='password' name="password" placeholder="password" value={inputs.password} onChange={handleChange}/>
        <input type='password' name='confirmPassword' placeholder="confirm password" value={inputs.confirmPassword} onChange={handleChange}/>
          <button type="submit">Submit</button>
      </form>
      {response !== '' && <p>{response}</p>}

    </>
  );
};

export default withRouter(ChangePassword);