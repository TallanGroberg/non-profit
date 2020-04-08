import React, {useState, useContext} from 'react';
import {withAuth, authContext, bearerAxios} from './AuthProvider'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const initState = {title: '', description: '', displayImage: ''}
  const {user, handleError} = useContext(authContext)
  const [aboutTheArticle, setAboutTheArticle] = useState(initState)
  const [content, setContent] = useState([])
  const [articleForWriter, setArticleForWriter] = useState([])
  const [count, setCount] = useState(0)
  

  

  

  
  console.log('content', content, 'articleForWriter',articleForWriter, aboutTheArticle )

  const submitContent = (arg) => {
    const set = new Set([ ...content, arg])
      let arr = [...set]
        arr = arr.map(articlePiece => {
          return articlePiece.orderAppear === arg.orderAppear ? arg : articlePiece})
            setContent(prev => ([ ...arr]))
  }

  

  const saveArticle = () => {
    
    const wholeArticle = {user: user._id, article: content,}
  
    
    bearerAxios.post('/article', wholeArticle)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      handleError(err)
    })
  }

  return (
    <articleContext.Provider value={{
      
      count,
      setCount,
      saveArticle,
      submitContent,
      aboutTheArticle, 
      setAboutTheArticle,
      content, 
      setContent,

      articleForWriter, 
      setArticleForWriter,

          

          
        
    }}>
      {props.children}
    </articleContext.Provider>
  );
};

export default ArticleProvider;