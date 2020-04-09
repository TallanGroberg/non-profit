import React, {useState, useContext} from 'react';
import MakeInputs from './MakeInputs';
import {articleContext} from '../providers/ArticleProvider'
import Image from '../articleWriting/Image'
const ArticleDisplay = () => {
  

  const{saveArticle, setAboutTheArticle, aboutTheArticle} = useContext(articleContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAboutTheArticle(prev => ({...prev, [name]: value}))
  }

  return (<>
      <form>
        <textarea  placeholder='title' 
        name='title' 
        value={aboutTheArticle.title} 
        onChange={handleChange} />
        <br />
        <textarea  placeholder='description'
        name='description' 
        value={aboutTheArticle.description} 
        onChange={handleChange} />
      </form>
      <p>Display Image</p>
      <Image id='displayImage' />
      <MakeInputs />
      <br />
          <button onClick={() => saveArticle()}>Save article</button>
  </>);
};

export default ArticleDisplay;