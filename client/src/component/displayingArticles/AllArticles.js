import React, {useState,useEffect} from 'react';
import axios from 'axios'

const AllArticles = (props) => {
  const [articles, setArticles] = useState([])
  console.log(articles)

  useEffect( () => {
    axios.get('/article')
    .then(res => {
      setArticles(prev => (res.data))
    })
  }, [])


  return (
    <div>
      {articles.length > 0 && articles.map(article => 
      
      <>
      
      <h1>{article.title}</h1>
        <h4>{article.description}</h4>
        <img src={article.displayImage} />
      </>
      )}
    </div>
  );
};

export default AllArticles;