import React, {useState, useContext} from 'react';
import MakeInputs from './MakeInputs';
import {articleContext} from '../providers/ArticleProvider'
import {authContext} from '../providers/AuthProvider'
import Image from '../articleWriting/Image'

const ArticleDisplay = (props) => {
  
  const {error} = useContext(authContext) 

  console.log(props)

  const{saveArticle,
        setAboutTheArticle, 
        aboutTheArticle,
        editArticle
        } = useContext(articleContext)
        

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAboutTheArticle(prev => ({...prev, [name]: value}))
  }

  return (<>
      <form>
          <select name="catagory" onChange={handleChange}>
            <option value={aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : null}>{aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : 'Catagory'}</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
          </select>
          <br />
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
      {props.isForEditing === undefined ?
          <MakeInputs />
          :
          <MakeInputs isForEditing={props.isForEditing.article} />
      }
      <br />
          <button onClick={props.isForEditing === undefined ? 
              () => saveArticle() 
              : 
              () => editArticle(props.isForEditing._id)}>
                {props.isForEditing === undefined ? 'Save article' : "Save Edits"}
            </button>
          {error.length > 0 && error.map(err => <p>{err}</p>)}
  </>);
};

export default ArticleDisplay;