import React, {useEffect, useState, useContext} from 'react';
import {bearerAxios, } from '../../providers/AuthProvider'
import {articleContext} from '../../providers/ArticleProvider'
import {withRouter} from 'react-router-dom'
import ArticleDisplay from '../../articleWriting/ArticleDisplay'

const EditAfterPublished = (props) => {
  const [article, setArticle] = useState([])

    const {_id} = props.match.params

    console.log(article)

    const {setAboutTheArticle, setContent} = useContext(articleContext)

  useEffect( () => {
    bearerAxios.get('/article/' + _id)
    .then(async res => {
      
      await setArticle(prev => (res.data))
        const {title, description, displayImage, catagory, article} = res.data
        await setAboutTheArticle(prev => ({title, description, displayImage, catagory}))
        setContent(prev => ([...res.data.article.flat(Infinity)]))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <ArticleDisplay isForEditing={article} />
    </div>
  );
};

export default withRouter(EditAfterPublished);