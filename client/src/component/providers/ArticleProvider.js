import React, {useState, useContext} from 'react';
import {withAuth, authContext, bearerAxios} from './AuthProvider'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const {user,} = useContext(authContext)
  
  const [content, setContent] = useState([])
  const [articleForWriter, setArticleForWriter] = useState([])
  const [count, setCount] = useState(0)

  

  

  
  console.log('content', content, 'articleForWriter',articleForWriter)

  const submitContent = (arg) => {
    
    const set = new Set([ arg])
    const arr = [...set]
    
    setContent(prev => ([...prev, ...arr]))


    
  }

  

  const saveArticle = () => {
    
    const wholeArticle = {user: user._id, article: content}
  
    console.log(user._id)
    bearerAxios.post('/article', wholeArticle)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <articleContext.Provider value={{
      
      count,
      setCount,
      content, 
      setContent,
      saveArticle,
      submitContent,
      articleForWriter, 
      setArticleForWriter,

          

          
        
    }}>
      {props.children}
    </articleContext.Provider>
  );
};

export default ArticleProvider;