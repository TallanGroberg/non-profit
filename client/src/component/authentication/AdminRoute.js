import React, {useContext} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import {authContext} from '../providers/AuthProvider'

const AdminRoute = (props) => {
  const {component: Component, ...rest } = props
  const { token, user: {isAdmin, } } = useContext(authContext)
  //make to require a token 
  return (
    token === localStorage.getItem('token') && token !== '' && isAdmin === true
      ? 
        <Route { ...rest} component={Component} /> 
      :
        <Redirect to='/signin' />
  );
};

export default withRouter(AdminRoute);