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

          

          useEffect( () => {
            if(isForEditing !== undefined){

              isForEditing.map( async article => {
                  const {image,video,textarea, orderAppear} = article
                  if(image !== undefined){
                    await article.orderAppear !== 'displayImage' && setCount(prev => (prev + 1))
                      
                      setArticleForWriter(prev => ([...prev, 
                      <Image 
                        imgUrl={image} 
                          id={articleForWriter.length} 
                            key={count}  
                        />
                      ]))
                    } else if(textarea !== undefined) {
                      await setCount(prev => (prev + 1))
                        setArticleForWriter(prev => ([...prev, 
                        <TextArea 
                          textarea={textarea} 
                            id={articleForWriter.length} 
                              key={count}  
                          />]))
                      } else if(video !== undefined) {
                        await setCount(prev => (prev + 1))
                        setArticleForWriter(prev => ([...prev, 
                        <Video id={articleForWriter.length} key={count}  
                          />]))
                      }
              })
              
            }
          },[])



  
  
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

  
  

  return (
    <div>
      {articleForWriter.map((input, i) => 
        <WritersDisplay
        input={input}
        count={i} 
        key={i}
        />)}
      <br />

      
      <button id="video" onClick={() => addVideo()}>Add video</button>
      <button id="paragraph" onClick={() => addTextArea()}>Add paragraph</button>
      <button id="image-button" onClick={() => addImage()}>Add image</button>
        
      
      
    </div>
  );
};

export default MakeInputs;