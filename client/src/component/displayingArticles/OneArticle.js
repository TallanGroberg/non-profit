import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {bearerAxios} from '../providers/AuthProvider'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
import Content from './Content'
import thumbsup from '../../images//wireFrameImages/thumsup.png'

const OneArticle = (props) => {
  const [articleContent, setArticleContent] = useState({})
  const [liked, setLiked] = useState(false)
  const [article, setArticle] = useState({})
    const {setContent} = useContext(articleContext)



  const {_id } = props.match.params
  
  
  useEffect( () => {
    // setContent([])
    
    axios.get(`/article/${props.match.params._id}`)
    .then(res => {
      console.log(res.data)
       setArticle(res.data)
            setArticleContent(res.data.article)
            document.title = articleContent.title
    })
  }, [])

  useEffect( () => {
    return () => {
      setArticleContent([])
    }
  }, [])

  const handleLike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/like/${_id}`)
    .then(res => {
      
    })
    .catch(err => console.log(err))
  }
  const handleUnlike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/unlike/${_id}`)
    .then(res => {
      
    })
    .catch(err => console.log(err))
  }

  

  return (
    <>
      <ArticleStyle>
      <div key={article._id}>
        <h1 data-testid="article-title" >{article.title}</h1>
        {console.log(article.user)}
        {typeof article.user === 'object' && 
        <div className="author-info">
          <p id='author-name'>{article.user.name}</p> 
            <img id='author-image' src={article.user.imgUrl}/> 
        </div>
      }
              <p id='date'>{article.displayDate}</p>
        <h4>{article.description}</h4>
          <img src={article.displayImage} />

          {articleContent.length > 0 && articleContent.map(content => {
            return <Content content={content} article={article} />
            
          })}
          <button data-testid='like-unlike-button' onClick={liked ?
                () => handleUnlike(article._id)
                : 
                () => handleLike(article._id)
                }>{liked ? 'article liked' : 'like article'}</button>
            
            <p data-testid="counter">{liked ? article.likes + 1 : article.likes }</p>
            <img id='thumbs-up' src={thumbsup} />
          </div>
      

      </ArticleStyle>
    </>
  );
};

const ArticleStyle = styled.div`

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

`;

export default withRouter(OneArticle);

