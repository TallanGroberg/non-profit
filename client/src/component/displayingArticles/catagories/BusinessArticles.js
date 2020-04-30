import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import SearchForm from '../../authentication/userFeatures/SearchForm'

const BusinessArticles = () => {

  const [articles, setArticles] = useState([])
  

  useEffect( () => {
    document.title = 'Business'
    axios.get('/article/business')
    .then(res => {
      setArticles(prev => (res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <SearchForm catagory='business' setArticles={setArticles} />
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

export default BusinessArticles;