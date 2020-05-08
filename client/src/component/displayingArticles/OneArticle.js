import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {bearerAxios} from '../providers/AuthProvider'
import {withRouter, Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
import Content from './Content'
import Author from './Author'
import Likes from './Likes'
import thumbsup from '../../images//wireFrameImages/thumsup.png'

const OneArticle = (props) => {
  const [articleContent, setArticleContent] = useState({})
  const [article, setArticle] = useState({})
    const {setContent} = useContext(articleContext)



  const {_id } = props.match.params

  let lowerCase;
  if(article.catagory !== undefined) {
    lowerCase = article.catagory.toLowerCase()
  }
  
  useEffect( () => {
    axios.get(`/article/${props.match.params._id}`)
    .then(res => {
      setArticle(res.data)
      setArticleContent(res.data.article)
      document.title = article.title
    })
    return () => {
      setArticleContent([])
    }
  }, [])


  return (
    <>
      <ArticleStyle>
      <div key={article._id}>
        <Link id='catagory-link' to={'/articles/' + lowerCase}>{article.catagory}</Link>
        {typeof article.user === 'object' && 
        <Author article={article} />
      }
        <h1 data-testid="article-title" >{article.title}</h1>
        {console.log(article.user)}
              <p id='date'>{article.displayDate}</p>
        <h4>{article.description}</h4>
          <img src={article.displayImage} />

          {articleContent.length > 0 && articleContent.map(content => {
            return <Content content={content} article={article} />
            
          })}
          
          
          </div>
          <div id="likes" >

            <Likes 
              article={article}
              likes={article.likes} 
              />
          </div>
      
      </ArticleStyle>
    </>
  );
};

const ArticleStyle = styled.div`

#catagory-link {
  display: flex;
  position: relative;
  left: 0;
}

#thumbs-up {
  height: 16px;
  width: 16px;
}
.author-info {
  display: flex;
}
#author-image {
  margin: 4px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
#date {
  display: flex;
  position: relative;
  
}
#likes {
  position: fixed;
  background-color: white;
  bottom: 4px;
  width: fit-content;
  border-bottom: 1px solid #34AF70;
}
`;

export default withRouter(OneArticle);

