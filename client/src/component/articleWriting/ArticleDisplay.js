import React, {useState, useContext, useEffect} from 'react';
import MakeInputs from './MakeInputs';
import {articleContext} from '../providers/ArticleProvider'
import {authContext} from '../providers/AuthProvider'
import Image from '../articleWriting/Image'
import TextArea from '../articleWriting/TextArea'
import Video from '../articleWriting/Video'

const ArticleDisplay = (props) => {
  
  const {error} = useContext(authContext) 

  const {isForEditing} = props

  

  const{saveArticle,
        setAboutTheArticle, 
        aboutTheArticle,
        setArticleForWriter,
        setContent,
        editArticle,
        setCount,
        submitContent,
          content,
        } = useContext(articleContext)

        const instanceOfContent = async () => {
          
          
          isForEditing.article.map( async article => {
            const {image,video,textarea, } = article
           
            if(image !== undefined && article.orderAppear !== 'displayImage'){
                console.log('displayed image')
               setCount(article.orderAppear) 
                
                setArticleForWriter(prev => ([...prev, 
                <Image 
                  imgUrl={image} 
                    id={article.orderAppear} 
                      key={article.orderAppear}  
                  />
                ])) 
                submitContent(article)

              } else if(textarea !== undefined) {
                await setCount(article.orderAppear)
                  setArticleForWriter(prev => ([...prev, 
                  <TextArea 
                    textarea={textarea} 
                      id={article.orderAppear} 
                        key={article.orderAppear}  
                    />])) 
                    submitContent(article)
                    
                } else if(video !== undefined) {
                  await setCount(article.orderAppear)
                  setArticleForWriter(prev => ([...prev, 
                  <Video id={article.orderAppear} 
                    key={article.orderAppear}
                      videoUrl={video}
                    />])) 
                    submitContent(article)

                }
            })

            

        } 

        
        

        useEffect( () => {
              if(props.isForEditing !== undefined) {

                instanceOfContent()
                
              }
          },[props.isForEditing])

            //component did unmount
            useEffect(() => {
              return () => {
                setArticleForWriter([])
                setContent([])
              }
            }, []);
        

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
          <MakeInputs isForEditing={props.isForEditing} />
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