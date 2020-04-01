import React, {useState} from 'react';
import axios from 'axios'

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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')

    const signup = (user) => {
      axios.post('/user/signup', user)
      .then(res => {
        const {token, user} = res.data
        delete user.password
        localStorage.setItem('token', token )
        localStorage.setItem('user', JSON.stringify(res.data))
      })
    }
    
  
  

  return (
    <authContext.Provider value={{
      signup,
    }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;