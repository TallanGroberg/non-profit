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
            <h1 id='title'>{article.title}</h1>
              <p id="author">{article.user.name}</p>
              <p id='date'>{article.displayDate}</p>
                
                <Likes likes={article.likes} />
                
              
          </div>
              
                <img id='display-image' src={article.displayImage} />
            <div id="description-container">
              <h4 >{article.description}</h4>
            </div>
        </ArticleStyles>
          </Link>

      </>
      )}
  </>);
};

const ArticleStyles = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border-bottom: 2px solid;


    
  .title-description {
    grid-area: 1 / 1 / 2 / 2;

  


  }
  .title-description > #title {
    font-size: 16px;
   
    text-align: left;
    position: relative;
  }
  .title-description > #author {
  
    text-align: left;
    position: relative;
  }
  .title-description > #date {
 
    font-size: 12px;
    text-align: left;
    position: relative;
  }
  #description-container {
    text-align: left;
    align-self: flex-start;
    position: relative;
    word-wrap: break-word;
    overflow: hidden;
    grid-area: 2 / 1 / 3 / 3;
  }
  #display-image {
    overflow: hidden;
    grid-area: 1 / 2 / 2 / 3; 
    height: 100%;
    width: 100%;
  }

`;

export default AllArticles;