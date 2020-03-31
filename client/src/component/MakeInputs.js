import React, {useState} from 'react';

import WritersDisplay from './WritersDisplay'

import TextArea from './TextArea'
import Image from './Image'
import Video from './Video'


const MakeInputs = () => {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState([])
  

 
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
      
      
      
    </div>
  );
};

export default MakeInputs;