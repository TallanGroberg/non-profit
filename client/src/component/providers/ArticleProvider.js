import React, {useState, useContext, useEffect} from 'react';
import {withAuth, authContext, bearerAxios} from './AuthProvider'
import {withRouter} from 'react-router-dom'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const initState = {title: '', description: '', displayImage: '', catagory: '', published: false}

  const {user, handleErrors, setError} = useContext(authContext)

  const [aboutTheArticle, setAboutTheArticle] = useState(initState)
  const [content, setContent] = useState([])
  const [articleForWriter, setArticleForWriter] = useState([])
  const [count, setCount] = useState(0)

  

  const submitContent = (arg) => {
    
    setContent(prev => {
        const sorted = prev.sort( (a,b) => a.orderAppear - b.orderAppear)
          const set = new Set([ ...sorted, arg])
            const arr = [...set]
              return [ ...arr]
      }
    )
    
  }

  const submitArticleForWriter = (arg) => {
    setArticleForWriter(prev => {
      const set = new Set([ ...prev, arg])
      const arr = [...set]
      return [...arr]
    }
    )
    
    
  }

  const saveArticle = async () => {
    
    
  
    const wholeArticle = await  {...aboutTheArticle, user: user._id, article: packageForDatabase() }
    
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
    

  
      
  

  

  

  const packageForDatabase = () => {
    let seen = new Set()
    let reversedContent = content.reverse()
    let filteredArr = reversedContent.filter(el => {
      const duplicate = seen.has(el.orderAppear);
      seen.add(el.orderAppear);
      return !duplicate;
    });
      let sortedArr = filteredArr.sort( (a,b) => a.orderAppear - b.orderAppear)
        return sortedArr
  }


  const editArticle = async (argAs_id) => {

    const wholeArticle = {...aboutTheArticle, user: user._id, article:  packageForDatabase()}
  
    if(aboutTheArticle.catagory !== 'Catagory' && aboutTheArticle.catagory !== ''){

      await bearerAxios.put('/article/' + argAs_id, {article: []})
      .then( res => {
      
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

  const deleteArticle = (article) => {
    console.log('delete aritlce')
    if(window.confirm('are you sure you would like to delete this article,\n it will be gone forever')) {

      bearerAxios.delete('/article/' + article._id)
      .then( res => {
        alert(`${article.title} was successfully deleted.`)
        props.history.push('/profile')
      })
    } else {
      alert('article was saved')
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
      deleteArticle,
      articleForWriter, 
      setArticleForWriter,

    }}>
      {props.children}
    </articleContext.Provider>
  );
};

export default withRouter(ArticleProvider);