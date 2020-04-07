import React, {useState, useContext} from 'react';
import MakeInputs from './MakeInputs';
import {articleContext} from '../providers/ArticleProvider'

const ArticleDisplay = () => {
  const [inputs, setInputs] = useState({title: '', description: '', displayImage: ''})

  const{saveArticle} = useContext(articleContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (<>
      <form >
        <textarea placeholder='title' />
        <br />
        <textarea  placeholder='description'/>
      </form>
      
      <MakeInputs />
      <br />
          <button onClick={() => saveArticle()}>Save article</button>
  </>);
};

export default ArticleDisplay;