import React, {useState} from 'react';

export const authContext = React.createContext()

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({auth: ''})

  return (
    <authContext.Provider value={{
      auth
    }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;