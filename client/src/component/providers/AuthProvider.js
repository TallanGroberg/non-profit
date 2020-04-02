import React, {useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

export const bearerAxios = axios.create()
bearerAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export const authContext = React.createContext()

const AuthProvider = (props) => {
  const [error, setError] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [user, setUser] = useState({} || JSON.parse(localStorage.getItem('user')))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')


    const {history,} = props

    const signup = (user) => {
      axios.post('/user/signup', user)
      .then( async res => {
        const {token,} = res.data
        await delete user.password
        await localStorage.setItem('token', token )
        await setToken(token)
        await localStorage.setItem('user', JSON.stringify(res.data))
        await setUser(res.data.user)
        history.push('/')
      })
      .catch(err => {
        console.error(err.message)
      })
    }
    const signin = (user) => {
      axios.post('/user/signin', user)
      .then( async res => {
        const {token,} = res.data
        await delete user.password
        await localStorage.setItem('token', token )
        await setToken(token)
        await localStorage.setItem('user', JSON.stringify(res.data))
        await setUser(res.data.user)
        history.push('/')
      })
      .catch(err => {
        console.error(err.message)
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
      token,
      user,
    }}>
      {props.children}
    </authContext.Provider>
  );
};

export default withRouter(AuthProvider);