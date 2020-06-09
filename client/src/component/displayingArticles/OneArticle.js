import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {bearerAxios} from '../providers/AuthProvider'
import {withRouter, Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
import Content from './Content'
import Author from './Author'
import Likes from './Likes'
import Options from './usersOptions/Options'
import thumbsup from '../../images//wireFrameImages/thumsup.png'
import plus from '../../images/wireFrameImages/plus.png'
import cross from '../../images/wireFrameImages/cross.png'

const OneArticle = (props) => {
  const [optionsToggle, setOptionsToggle] = useState(false)
    const {setContent,
            articleContent,
              setArticleContent,
                article,
                  setArticle} = useContext(articleContext)
    
    console.log( 'article',article, 'desktopPreview', props.desktopPreview)
    
    
    
    const {_id } = props.match.params
    let lowerCase;
    
    
    
    
      const getArticle = () => {
        if(props.desktopPreview  === undefined) {
          console.log('undefined desktop view')
          axios.get(`/article/${props.match.params._id}`)
          .then(res => {
            if(res.data.published === true) {

              setArticle(res.data)
            }
              if(res.data.article  !== undefined) {
                setArticleContent(res.data.article)
              }
          })
          .catch(err => {
            console.error(err)
          })
        } 
        else {
          
        }
          document.title = article.title
        }

      const getDesktopPreview = () => {
          if(props.desktopPreview !== undefined) {
            setArticle(props.desktopPreview)
            if(props.desktopPreview.article !== undefined) {
              setArticleContent(props.desktopPreview.article)
            }
          }
      }

      useEffect( () => {
        getArticle()
        
      }, [])
      useEffect( () => {
        getDesktopPreview()
      }, [props.desktopPreview])


  return (
    <>
      <ArticleStyle>
      <div id="article" key={article._id}>
        <Link id='catagory-link' to={'/articles/' + article.catagory}>{article.catagory}</Link>
        {typeof article.user === 'object' && 
        <Author article={article} />
      }
        <h1 data-testid="article-title" >{article.title}</h1>
              <p id='date'>{article.displayDate}</p>
        <h4 id="description">{article.description}</h4>
          <img src={article.displayImage} />

          {articleContent.length > 0 && articleContent.map(content => {
            return <Content content={content} article={article} />
            
          })}
          
          
          </div>



            <div className="options">
              <div id="likes" >
                <Likes 
                  article={article}
                  likes={article.likes} 
                  />
              </div>

              {optionsToggle ? 
                <Fade unmountOnExit >
                <Options />
                  <img 
                    id='options-hide'
                    onClick={() => setOptionsToggle(prev => (!prev))} 
                      src={cross} 
                  />
                </Fade>
                :
                <Fade >
                  <img onClick={() => setOptionsToggle(prev => (!prev))} id='options-plus' src={plus} />
                </Fade>
              }
          </div>
      
      </ArticleStyle>
    </>
  );
};

const ArticleStyle = styled.div`

#article {
    width: fit-content;
    position: relative;
}

#catagory-link {
  display: flex;
  position: relative;
  left: 0;
}

#thumbs-up {
  height: 16px;
  width: 16px;
}
.author-info {
  display: flex;
}
#author-image {
  margin: 4px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
#date {
  display: flex;
  position: relative;
  
}
#description {
  word-wrap: break-word;
}
.options {
  display:flex;
  position: fixed;
  background-color: white;
  bottom: 4px;
  right: 4px;
  
  width: fit-content;
  border-bottom: 1px solid #34AF70;
}
#likes {
  position: relative;
  background-color: white;
  bottom: 0;
  right: 56px;
  width: fit-content;
  border-bottom: 1px solid #34AF70;
}


#options-plus {
  height: 20px;
  width: 20px;
  
}
#options-hide {
  height: 16px;
  width: 16px;
  
}

`;

export default withRouter(OneArticle);

