import React, {useState, useContext, useEffect} from 'react';
import {withAuth, authContext, bearerAxios} from './AuthProvider'
import {withRouter} from 'react-router-dom'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const initState = {title: '', description: '', displayImage: '', catagory: '',}

  const {user, handleErrors, setError} = useContext(authContext)

  const [aboutTheArticle, setAboutTheArticle] = useState(initState)
  const [content, setContent] = useState([])
  const [articleForWriter, setArticleForWriter] = useState([])
  const [count, setCount] = useState(0)
  
  
  //  console.log('content',content, 'articleForWriter', articleForWriter, count)
  
  
  

  
  
  
  
  
  const submitContent = (arg) => {
    
    setContent(prev => {
      const set = new Set([ ...prev, arg])
      let arr = [...set]
      arr = arr.flat(Infinity)
      
      return [ ...arr]
      }
    )
  }

  const submitArticleForWriter = (arg) => {
    setArticleForWriter(prev => {
      
      const set = new Set([ ...prev, arg])
      let arr = [...set]
      arr = arr.flat(Infinity)
      return [...arr]
    }
    )
    
    
  }


  

  const saveArticle = async () => {
    await content.flat(Infinity)
    submitContent(content)
    const wholeArticle = await  {...aboutTheArticle, user: user._id, article: content }
  
    if(aboutTheArticle.catagory !== 'Catagory' && aboutTheArticle.catagory !== ''){
      bearerAxios.post('/article', wholeArticle)
      .then(res => {
       setError([])
        props.history.push(`/article/${res.data._id}`)
      })
      .catch(err => {
        handleErrors(err.message)
      })
      } else {
        handleErrors('Articles require a catagory before they can be published.')
      }
  } 


  const editArticle = async (argAs_id) => {
    submitContent(content)
    const wholeArticle = {...aboutTheArticle, user: user._id, article: content }
  
    if(aboutTheArticle.catagory !== 'Catagory' && aboutTheArticle.catagory !== ''){

      await bearerAxios.put('/article/' + argAs_id, {article: []})
      .then( res => {
        debugger
        bearerAxios.put('/article/' + argAs_id, wholeArticle)
        .then(res => {
          setError([])
          props.history.push(`/article/${res.data._id}`)
        })
        .catch(err => {
          handleErrors(err.message)
        })
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
      editArticle,
      submitContent,
      submitArticleForWriter,
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

export default withRouter(ArticleProvider);