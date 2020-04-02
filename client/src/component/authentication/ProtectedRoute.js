import React, {useContext} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import {authContext} from '../providers/AuthProvider'

const ProtectedRoute = (props) => {
  const {component: Component, ...rest } = props
  const { token } = useContext(authContext)
  //make to require a token 
  return (
    token 
      ? 
        <Route { ...rest} component={Component} /> 
      :
        <Redirect to='/signin' />
  );
};

export default withRouter(ProtectedRoute);