import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import SearchForm from '../../authentication/userFeatures/SearchForm'

const PoliticsArticles = () => {

  const [articles, setArticles] = useState([])

  useEffect( () => {
    document.title = 'Politics'
    axios.get('/article/politics')
    .then(res => {
      
      setArticles(prev => (res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
       <SearchForm catagory='politics' setArticles={setArticles} />
        {articles.length > 0 && articles.map(article => 
          <>
            <Link to={`/article/${article._id}`}>
              <h1>{article.title}</h1>
                <h4>{article.description}</h4>
                  <img src={article.displayImage} />
            </Link>
          </>
        )}
    </div>
  );
};

export default PoliticsArticles;