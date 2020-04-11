import React, {useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { log } from 'util';

export const bearerAxios = axios.create()
bearerAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export const authContext = React.createContext()

const AuthProvider = (props) => {
  const [error, setError] = useState([])
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')


    const {history,} = props

    const handleErrors = (arg) => {
      
     
      const set = new Set([ ...error, arg])
    let arr = [...set]
      setError(prev => ([...arr]))
    }

    const signup = (user) => {
      axios.post('/user/signup', user)
      .then( async res => {
        const {token,} = res.data
        await delete user.password
        await localStorage.setItem('token', token )
        await setToken(token)
        await localStorage.setItem('user', JSON.stringify(res.data.user))
        setUser(res.data.user)
   
        history.push('/')
      })
      .catch(err => {
        
        handleErrors(err.message)
      })
    }
    const signin = (user) => {
      axios.post('/user/signin', user)
      .then( async res => {
        const {token,} = res.data
        await delete user.password
        await localStorage.setItem('token', token )
        setToken(token)
        await localStorage.setItem('user', JSON.stringify(res.data.user))
        setUser(res.data.user)
        history.push('/')
      })
      .catch(err => {
        handleErrors(err.message)
      })
    }

    const signout = async () => {
        await localStorage.removeItem('token', token )
        await setToken('')
        await localStorage.removeItem('user')
              setUser({})
    }
    
  
  

  return (
    <authContext.Provider value={{
      signup,
      signin,
      signout,
      error,
      setError,
      token,
      user,
    }}>
      {props.children}
    </authContext.Provider>
  );
};

export const withAuth = C => props => (
  <authContext.Consumer>
    {value => <C {...value} {...props} />}
  </authContext.Consumer>
)

export default withRouter(AuthProvider);