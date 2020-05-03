import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import {Elements, StripeProvider, injectStripe} from 'react-stripe-elements';

import {authContext} from './component/providers/AuthProvider'
import ProtectedRoute from './component/authentication/ProtectedRoute'
import NavBar from './component/navBar/NavBar'

import Signup from './component/authentication/Signup'
import Signin from './component/authentication/Signin'
import Profile from './component/authentication/userFeatures/Profile'
import UserInfo from './component/authentication/userFeatures/UserInfo'
import ChangePassword from './component/authentication/userFeatures/ChangePassword'
import SendEmailForPasswordChange from './component/authentication/userFeatures/SendEmailForPasswordChange'
import EditAfterPublished from './component/authentication/userFeatures/EditAfterPublished'

import ArticleDisplay from './component/articleWriting/ArticleDisplay';
import CommingSoon from './component/CommingSoon';
// import Donate from './component/Donate'

import AllArticles from './component/displayingArticles/AllArticles'
import OneArticle from './component/displayingArticles/OneArticle'
// import BusinessArticles from './component/displayingArticles/catagories/BusinessArticles';
// import ArtArticles from './component/displayingArticles/catagories/ArtArticles'
// import PoliticsArticles from './component/displayingArticles/catagories/PoliticsArticles'
// import RecentArticles from './component/displayingArticles/catagories/RecentArticles'
// import TrendingArticles from './component/displayingArticles/catagories/TrendingArticles'

function App(props) {
 

  useEffect( () => {
    
  }, [])



  return (<>
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/"> <CommingSoon /> </Route>
        {/* <Route exact path="/donate"> <Donate /> </Route> */}

        
        <Route exact path="/signup"> <Signup /> </Route>
        <Route exact path="/signin"> <Signin /> </Route>
        <ProtectedRoute exact path="/profile"> <Profile /> </ProtectedRoute>
        <ProtectedRoute exact path='/profile-settings'> <UserInfo /> </ProtectedRoute>
        <ProtectedRoute exact path="/article/edit/:_id"> <EditAfterPublished /> </ProtectedRoute>
        <Route exact path='/send-email'> <SendEmailForPasswordChange /> </Route>
        <Route exact path='/change-password/:_id'> <ChangePassword /> </Route>

        <ProtectedRoute exact path="/write-article"> <ArticleDisplay /> </ProtectedRoute>
        <Route exact path='/articles/:catagory' > <AllArticles /></Route>
        

        <Route exact path='/article/:_id'> <OneArticle /> </Route>
      </Switch>
      
        
      
    </Container>
  </>);
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin-bottom: 40px;
  img {
    height: 70%;
    width: 60%;
  }
  iframe {
    height: 70%;
    width: 65%;
  }
  button {
    outline: 0;
    background-color: white;
    margin: 1px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    border: none;
    border-radius: 10%;
    border-left: 1px solid #daede2;
    border-bottom: 2px solid #34AF70;
  }
  input[type="file"] {
    outline: none;
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 1px solid #34AF70;
    font-family: Roboto;
  }
  input[type="file"]:hover {
    border-top: 1px solid #daede2;
    border-bottom: 1px solid #34AF70;
    border-left: 1px solid #daede2;
}
  input {
    outline: none;
    padding: 12px 20px;
    border: none;
    border-bottom: 1px solid #34AF70;
    ease-in: 0.1s;
  }
  input:focus {
    border-top: 1px solid #daede2;
    border-bottom: 1px solid #34AF70;
    border-left: 1px solid #daede2;
}
  textarea {
    outline: none;
    padding: 12px 20px;
    border: none;
    border-bottom: 1px solid #34AF70;
    ease-in: 0.1s;
  }
  textarea:focus {
    border-top: 1px solid #daede2;
    border-bottom: 1px solid #34AF70;
    border-left: 1px solid #daede2;
}
a {
  margin: 1px;
  color: black;
  text-decoration: none;
  ease-in: 0.5s;
}
a:hover {
  border-bottom: 1px solid #daede2;
}
select {
  text-decoration: none;
}
`;


export default App;

