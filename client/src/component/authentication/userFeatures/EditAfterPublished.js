import React, {useEffect, useState, useContext} from 'react';
import {bearerAxios, } from '../../providers/AuthProvider'
import {articleContext} from '../../providers/ArticleProvider'
import {withRouter} from 'react-router-dom'
import ArticleDisplay from '../../articleWriting/ArticleDisplay'

const EditAfterPublished = (props) => {
  const [article, setArticle] = useState([])

    const {_id} = props.match.params

    

    const {setAboutTheArticle, setContent, submitContent} = useContext(articleContext)

  useEffect( () => {
    bearerAxios.get('/article/' + _id)
    .then(async res => {
      
      await setArticle(prev => (res.data))
        const {title, description, published, displayImage, catagory, article} = res.data
        await setAboutTheArticle(prev => ({title, description, displayImage, published, catagory}))

    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect( () => {
    return () => {
      setArticle([])
      setAboutTheArticle({title: '', description: '', displayImage: '', catagory: '',})
    }
  }, [])

  
  return (
    <div>
      {article.length !== 0 ? <ArticleDisplay isForEditing={article} /> : null}
    </div>
  );
};

export default withRouter(EditAfterPublished);