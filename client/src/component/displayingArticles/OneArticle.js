import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
const OneArticle = (props) => {
  const [articleContent, setArticleContent] = useState([])

  const {_id } = props.match.params
  console.log(articleContent, _id)
  
  useEffect( () => {
    axios.get(`/article/${_id}`)
    .then(res => {
      setArticleContent(prev => ([...prev, res.data]))
    })
  }, [])

  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

  return (
    <>
     {articleContent.length > 0 && articleContent.map(article => {
        return <div key={article._id}>
        <h1>{article.title}</h1>
        <h4>{article.description}</h4>
          <img src={article.displayImage} />

          {article.article.length > 0 && article.article.map(content => {
            if(content.image && content.image !== article.displayImage) {
              return <img src={content.image} />
            } else if(content.video) {
              return <ReactPlayer 
              style={{margin: 'auto', left: 0, right: 0, }}
              width={videoWidth}
              height={videoHeight}
              url={content.video} 
              controls
                />
            } else if(content.textarea) {
              return <p>{content.textarea}</p>
            }
            
          })}
          </div>
      })}
    </>
  );
};

export default withRouter(OneArticle);