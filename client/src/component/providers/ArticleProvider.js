import React, {useState, useContext} from 'react';
import {withAuth, authContext} from './AuthProvider'

export const articleContext = React.createContext()

const ArticleProvider = (props) => {
  const [article, setArticle] = useState([])

  const {user,} = useContext(authContext)

  console.log(user)

  const saveArticle = () => {
    console.log('saveArticle')
    console.log(user._id)
  }

  return (
    <articleContext.Provider value={{
      article,
      setArticle,
      saveArticle,
    }}>
      {props.children}
    </articleContext.Provider>
  );
};

export default ArticleProvider;