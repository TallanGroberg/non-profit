import React, {useState,useEffect, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import {articleContext} from '../providers/ArticleProvider'
import WritersDisplay from './WritersDisplay'

import TextArea from './TextArea'
import Image from './Image'
import Video from './Video'


const MakeInputs = (props) => {
  
  
  const {isForEditing} = props
  const {user} = useContext(authContext)
  const {count,
          setCount,
          content,
          setContent,
          videoUrl,
          imageAsUrl,
          text,
          submitContent,
          setArticleForWriter,
          articleForWriter, 
          } = useContext(articleContext)

  
  
    const addTextArea = async () => {
      await setCount(prev => (prev + 1))
      setArticleForWriter(prev => ([...prev, <TextArea  id={articleForWriter.length} key={count}  />]))
      
    }

    const addImage = async () => {
      await setCount(prev => (prev + 1))
      
      
      setArticleForWriter(prev => ([...prev, <Image id={articleForWriter.length} key={count}  />]))
    }
    const addVideo = async () => {
      await setCount(prev => (prev + 1))
        setArticleForWriter(prev => ([...prev, <Video id={articleForWriter.length} key={count}  />]))
  }

  
  

  return (<>
    <div data-testid='article-container'>
      {articleForWriter.map((input, i) => {
        console.log(input)
        return <WritersDisplay
        input={input}
        count={i} 
        key={i}
        />})}
        
      
    </div>

      <div data-testid='article-button-container'>
        <button id="video" onClick={addVideo}>Add video</button>
          <button id="paragraph" onClick={addTextArea}>Add paragraph</button>
            <button id="image-button" onClick={addImage}>Add image</button>
      </div>
        
      
      
  </>);
};

export default MakeInputs;