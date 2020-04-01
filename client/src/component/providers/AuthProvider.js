import React, {useState} from 'react';

export const authContext = React.createContext()

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
  err: '',
  isSigningUp: false,
  user: JSON.parse(localStorage.getItem('user')),
  name: '',
  email: '',
  password: '',
  imgUrl: '',
  token: localStorage.getItem('token') || '',})

  return (
    <authContext.Provider value={{
      auth
    }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;