import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import {bearerAxios} from '../providers/AuthProvider'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
import Content from './Content'
const OneArticle = (props) => {
  const [articleContent, setArticleContent] = useState([])
  const [liked, setLiked] = useState(false)
  const [article, setArticle] = useState([])
    const {setContent} = useContext(articleContext)

  if(articleContent.length > 0) {
    document.title = articleContent[0].title
  }

  const {_id } = props.match.params
  
  
  useEffect( () => {
    // setContent([])
    
    axios.get(`/article/${props.match.params._id}`)
    .then(async res => {
      console.log(res.data)
       setArticle(article)
            setArticleContent(prev => ([...prev, res.data]))
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
     {articleContent.length > 0 && articleContent.map(article => {
        return <div key={article._id}>
        <h1 data-testid="article-title" >{article.title}</h1>
        <h4>{article.description}</h4>
          <img src={article.displayImage} />

          {article.article.length > 0 && article.article.map(content => {
            return <Content content={content} article={article} />
            
          })}
          <button data-testid='like-unlike-button' onClick={liked ?
                () => handleUnlike(article._id)
                : 
                () => handleLike(article._id)
                }>{liked ? 'article liked' : 'like article'}</button>
            
            <p data-testid="counter">{liked ? article.likes + 1 : article.likes }</p>
          </div>
      })}
    </>
  );
};

export default withRouter(OneArticle);