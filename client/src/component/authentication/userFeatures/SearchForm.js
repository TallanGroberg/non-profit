import React, { useState, } from 'react';
import axios from 'axios'



const SearchForm = (props) => {
  const initInputs = { title: "" }
  const [inputs, setInputs] = useState(initInputs)

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(inputs => ({...inputs, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    axios.get( `/article/search/${props.catagory}?title=${inputs.title}`)
    .then(res => {
      props.setArticles(res.data)
    })
    .catch(err => console.error(err))
    

  }
  return (
   
    <form onSubmit={handleSubmit}>
     
        <input type="text" placeholder='search'
        name='title'
        value={inputs.title}
        onChange={handleChange} />
      <br />
          <button>search</button>
    </form>
      
  );
};



export default SearchForm;