import React, {useState, useContext} from 'react';
import {withAuth, authContext, bearerAxios} from './AuthProvider'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const initState = {title: '', description: '', displayImage: '', catagory: '',}

  const {user, handleErrors, setError} = useContext(authContext)

  const [aboutTheArticle, setAboutTheArticle] = useState(initState)
  const [content, setContent] = useState([])
  const [articleForWriter, setArticleForWriter] = useState([])
  const [count, setCount] = useState(0)
  

   



  
  console.log(handleErrors, aboutTheArticle.catagory)

  

  const submitContent = (arg) => {
    const set = new Set([ ...content, arg])
      let arr = [...set]
        arr = arr.map(articlePiece => {
          return articlePiece.orderAppear === arg.orderAppear ? arg : articlePiece})
            setContent(prev => ([ ...arr]))
            
  }


  

  const saveArticle = () => {
    
    const wholeArticle = {...aboutTheArticle, user: user._id, article: content }
  
    if(aboutTheArticle.catagory !== 'Catagory' && aboutTheArticle.catagory !== ''){

      bearerAxios.post('/article', wholeArticle)
      .then(res => {
       setError([])
      })
      .catch(err => {
        handleErrors(err.message)
      })
    } else {

      handleErrors('Articles require a catagory before they can be published.')
    }
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