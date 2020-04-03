import React, {useState, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import {articleContext} from '../providers/ArticleProvider'
import WritersDisplay from './WritersDisplay'

import TextArea from './TextArea'
import Image from './Image'
import Video from './Video'


const MakeInputs = () => {
  const [count, setCount] = useState(1)
  

  const {user} = useContext(authContext)
  const {article, setArticle, saveArticle} = useContext(articleContext)

  console.log(user)
  
    const addTextArea = async (arg) => {
      await setCount(prev => (prev + 1))
        setArticle(prev => ([...prev, <TextArea id={article.length} key={count}  />]))
  }
    const addImage = async (arg) => {
      await setCount(prev => (prev + 1))
        setArticle(prev => ([...prev, <Image id={article.length} key={count}  />]))
  }
    const addVideo = async (arg) => {
      await setCount(prev => (prev + 1))
        setArticle(prev => ([...prev, <Video id={article.length} key={count}  />]))
  }
  

  return (
    <div>
      {article.map((input, i) => 
          <WritersDisplay
            input={input}
              count={i} 
          />
          )}
      <br />
      
      <button id="video" onClick={() => addVideo()}>Add video</button>
      <button id="paragraph" onClick={() => addTextArea()}>Add paragraph</button>
      <button id="image-button" onClick={() => addImage()}>Add image</button>
        <br />
          <button onClick={() => saveArticle()}>Save article</button>
      
      
    </div>
  );
};

export default MakeInputs;