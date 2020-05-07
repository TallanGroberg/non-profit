import React, {useState,useEffect, useContext} from 'react';
import axios from 'axios'
import {Link, useParams, } from 'react-router-dom'
import {articleContext } from '../providers/ArticleProvider'
import Likes from './Likes'
import styled from 'styled-components'

const AllArticles = (props) => {
  const {articles, setArticles, setCatagory} = useContext(articleContext)
  let catagory;
  catagory = useParams().catagory
  if(catagory === undefined) {
    catagory = 'admin'
    document.title = 'Home'
  }

  useEffect(() => {
    document.title = catagory
    setCatagory(catagory)
    axios.get('/article/' + catagory)
    .then(res => {
      setArticles(prev => (res.data))
    })
    .catch(err => {
      console.log(err)
    })
    return () => {
      setArticles([])
    }
  }, [catagory])


  return (<>

      {articles.length > 0 && articles.map(article => 
      
      <>
          <Link to={`/article/${article._id}`}>
          
        <ArticleStyles>
          <div className="title-description">
            <h1>{article.title}</h1>
              <p id="author">{article.user.name}</p>
              <p id='date'>{article.displayDate}</p>
              <h4>{article.description}</h4>
                
                <Likes likes={article.likes} />
                
          </div>
                <img id='display-image' src={article.displayImage} />
        </ArticleStyles>
          </Link>

      </>
      )}
  </>);
};

const ArticleStyles = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin: 2px;
  > div {
    align-items: right;
  }
  .title-description {
    text-align: left;
    margin: 4px;
    width: 160px;
  }
  h1 {
    font-size: 16px;
  }
  h4 {
    font-size: 12px;
  }
  #display-image {
    width: 48%;
    margin: 4px;
    align-content: center;
  }
  #date {
    font-size: 8px;
  }
  #author {
    font-size: 8px;
  }
  

`;

export default AllArticles;