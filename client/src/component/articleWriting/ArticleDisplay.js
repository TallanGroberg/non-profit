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
        submitArticleForWriter,
        setContent,
        editArticle,
        setCount,
        submitContent,
        deleteArticle,
          content,
        } = useContext(articleContext)

        const instanceOfContent = async (sorted) => {
          
          
          await sorted.map( async article => {
            const {image,video,textarea, } = article
            
           
            if(article.image !== undefined && article.orderAppear !== 'displayImage'){
                console.log('displayed image')
               await submitContent(article) 
                
               submitArticleForWriter(
                <Image 
                  imgUrl={image} 
                    id={article.orderAppear} 
                      key={article.orderAppear}  
                  />
                ) 
                

              } else if(article.textarea !== undefined) {
                
                await submitContent(article)
                submitArticleForWriter(
                  <TextArea 
                    article={article}
                      id={article.orderAppear}
                        key={article.orderAppear}
                    />) 
                    
                    
                } else if(article.video !== undefined) {
                  await submitContent(article)
                  submitArticleForWriter(
                  <Video id={article.orderAppear} 
                    key={article.orderAppear}
                      videoUrl={article}
                    />) 
                    
                }
            })
            setCount(isForEditing.article.length )
        } 

        
        

        useEffect( () => {
              if(props.isForEditing !== undefined ) {
                const sorted = props.isForEditing.article.sort( (a,b) => a.orderAppear - b.orderAppear)
                instanceOfContent(sorted)
              }
          },[props.isForEditing])

            //component did unmount
            useEffect(() => {
              return () => {
                setArticleForWriter([])
                setContent([])
                setCount(0)
              }
            }, []);
        

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAboutTheArticle(prev => ({...prev, [name]: value}))
  }

  return (<>
      <form>
          <select data-testid='catagory' name="catagory" onChange={handleChange}>
            <option value={aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : null}>{aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : 'Catagory'}</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
          </select>
          <br />
        <textarea 
         id="title"
        placeholder='title' 
        name='title' 
        value={aboutTheArticle.title} 
        onChange={handleChange} />
        <br />
        <textarea 
          id="description"
         placeholder='description'
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
            {props.isForEditing && <button onClick={() => deleteArticle(props.isForEditing)}>Delete Article</button>}

          {error.length > 0 && error.map(err => <p>{err}</p>)}
  </>);
};

export default ArticleDisplay;