import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components'
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
        publishArticle,
        setCount,
        submitContent,
        deleteArticle,
          content,
        } = useContext(articleContext)

        let statusOf = aboutTheArticle.published ? 'published' : 'private'

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
              document.title = `write article`
              if(props.isForEditing !== undefined ) {
                document.title = `edit ${props.isForEditing.title}`
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
    <DisplayStyle>

      <form>
          <select data-testid='catagory' name="catagory" onChange={handleChange}>
            <option value={aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : ''}>{aboutTheArticle.catagory !== '' ? aboutTheArticle.catagory : 'Catagory'}</option>
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

      <div className="crud-buttons">
            {error.length > 0 && error.map(err => <p>{err}</p>)}

              <button  id='edit-save'
                onClick={props.isForEditing === undefined ? 
                  () => saveArticle() 
                  : 
                  () => editArticle(props.isForEditing._id)}>
              {props.isForEditing === undefined ? `Save article (${statusOf})` : `Save Edits (${statusOf})`}
                </button>

                <button  
                  onClick={() => setAboutTheArticle( prev => ({...prev, published: !prev.published}))}>
                    {aboutTheArticle.published === false ? 
                      'Show public' 
                        : 
                      'Make private'
                    }
                </button>
                {props.isForEditing && <button  
                                          onClick={() => deleteArticle(props.isForEditing)}>
                                            Delete Article
                                        </button>}

      </div>
    </DisplayStyle>
  </>);
};


const DisplayStyle = styled.div`
  align-content: right;
  width: 100vw;
.crud-buttons {
  position: fixed;
  bottom: 16px;
    display: flex;
    flex-direction: column;

}
.crud-buttons > #edit-save {
  margin: 2px;
  width: 72px;
}

`;



export default ArticleDisplay;