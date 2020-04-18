import React, {useState,useEffect, useContext} from 'react';
import axios from 'axios'
import {Link, Switch } from 'react-router-dom'
import {authContext, bearerAxios} from '../../providers/AuthProvider'
import ProtectedRoute from '../ProtectedRoute'
import EditAfterPublished from './EditAfterPublished'
import UserInfo from './UserInfo'
const Profile = (props) => {
  const [articles, setArticles] = useState([])
  
  const {user} = useContext(authContext)
  
  

  useEffect( () => {
    bearerAxios.get('/article/user/' + user._id)
    .then(res => {
 
      setArticles(prev => (res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <Link to='/profile-settings'>profile settings</Link>
      {articles.length > 0 ? articles.map( (article,i) => 
      <>
        <Link key={i} to={`/article/edit/${article._id}`}>
        
          <h1>{article.title}</h1>
            <h4>{article.description}</h4>
              <img src={article.displayImage} />
        </Link>
          <Switch>
            <ProtectedRoute exact path="/article/edit/:_id"> <EditAfterPublished
            article={article}
            /> </ProtectedRoute>
          </Switch>
      </>)
      :
      <>
        <p>You have no articles written.</p>
          <Link 
            style={{textDecoration: 'none'}} 
              to='/write-article'>
                  Start writing today.
            </Link>
      </>
    }
    </div>
  );
};

export default Profile;