import React, { useState, useContext } from 'react';
import axios from 'axios'
import {articleContext } from '../../providers/ArticleProvider'
import {useHistory} from 'react-router-dom'


const SearchForm = (props) => {
  const initInputs = { title: "" }
  const [inputs, setInputs] = useState(initInputs)

  const history = useHistory()

  const {catagory, setArticles} = useContext(articleContext)
  

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(inputs => ({...inputs, [name]: value}))
      axios.get( `/article/search/${catagory}?title=${inputs.title}`)
    .then(res => {
      setArticles(res.data)
      history.push('/articles/' + catagory)
      
    })
    .catch(err => console.error(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get( `/article/search/${catagory}?title=${inputs.title}`)
    .then(res => {
      setArticles(res.data)
      history.push('/articles/' + catagory)
      
    })
    .catch(err => console.error(err))
  }

  
  return (
   
    
      <form onSubmit={handleSubmit}>
        <input id='search-form' type="text" placeholder='search'
        name='title'
        value={inputs.title}
        
        onChange={handleChange} />
        </form>
    
      
  );
};



export default SearchForm;