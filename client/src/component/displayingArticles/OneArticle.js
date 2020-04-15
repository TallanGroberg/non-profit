import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {bearerAxios} from '../providers/AuthProvider'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import Content from './Content'

const OneArticle = (props) => {
  const [articleContent, setArticleContent] = useState([])
  const [liked, setLiked] = useState(false)

  console.log(liked)

  if(articleContent.length > 0) {
    document.title = articleContent[0].title
  }

  const {_id } = props.match.params
  console.log(articleContent, _id)
  
  useEffect( () => {
    axios.get(`/article/${_id}`)
    .then(async res => {
      await setArticleContent(prev => ([...prev, res.data]))
    })
    
  }, [])

  const handleLike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/like/${_id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }
  const handleUnlike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/unlike/${_id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  

  return (
    <>
     {articleContent.length > 0 && articleContent.map(article => {
        return <div key={article._id}>
        <h1>{article.title}</h1>
        <h4>{article.description}</h4>
          <img src={article.displayImage} />

          {article.article.length > 0 && article.article.map(content => {
            return <Content content={content} article={article} />
            
          })}
          <button onClick={liked ?
                () => handleUnlike(article._id)
                : 
                () => handleLike(article._id)
                }>{liked ? 'article liked' : 'like article'}</button>

            <p>{liked ? article.likes + 1 : article.likes }</p>
          </div>
      })}
    </>
  );
};

export default withRouter(OneArticle);