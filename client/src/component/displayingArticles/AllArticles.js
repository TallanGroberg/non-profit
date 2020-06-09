import React, {useState,useEffect, useContext} from 'react';
import axios from 'axios'
import {Link, useParams, } from 'react-router-dom'
import {articleContext } from '../providers/ArticleProvider'
import Likes from './Likes'
import styled from 'styled-components'
import Author from './Author'
import OneArticle from './OneArticle'
const AllArticles = (props) => {
  const [desktopPreview, setDesktopPreview] = useState(undefined)
      const {articles, setArticles, setCatagory} = useContext(articleContext)
      let catagory;
      let user;
      let abuseReports = props.abuseReports;
      let _id
      catagory = useParams().catagory
      user = useParams().user
      _id = useParams()._id

      console.log(props, catagory)

      if(abuseReports !== undefined) {
        catagory = 'report'
        document.title = 'reports'
      } else if (catagory === undefined && user === undefined) {

        catagory = 'admin'
        document.title = 'Home'
      } else if(user !== undefined) {
        catagory = user + "/" + _id
        console.log(catagory)
      }

  
  useEffect(() => {

    if(abuseReports === undefined) {
      
      document.title = catagory
      setCatagory(catagory)
      axios.get('/article/' + catagory)
      .then(async res => {
        await setArticles(prev => (res.data))
        setDesktopPreview(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })
    } 
    return () => {
      // setArticles([])
      setDesktopPreview({})
    
  }


  }, [catagory])

  


  return (<>
  <DesktopStyle>
            <div id="one-article">
            <OneArticle 
              setDesktopPreview={setDesktopPreview} 
                desktopPreview={desktopPreview}
            />
            </div>

    <ArticleListStyle>

      {articles.length > 0 && articles.map(article => 
      <>
          <Link onMouseOver={() => setDesktopPreview(article)} to={`/article/${article._id}`}>
          
        <ArticleStyles>
          <div className="title-description">
            <h1 id='title'>{article.title}</h1>
              <Author article={article} />
                <p id='date'>{article.displayDate}</p>
                  <Likes article={article} likes={article.likes} />
          </div>
              
                <img id='display-image' src={article.displayImage} />
            <div id="description-container">
              <h4 >{article.description}</h4>
            </div>
        </ArticleStyles>
          </Link>

      </>
      )}
      </ArticleListStyle>




  </DesktopStyle>
  </>);
};

const DesktopStyle = styled.div`


#one-article {
  position: fixed;
    display: none;
    margin: 4px;
  }

  #one-article > #article {
    width: 200px;
    position: relative;
  }

@media screen and (min-width: 768px) {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  
  #one-article {
    display: flex;
    grid-area: 1 / 2 / 2 / 4;
    position: relative;
    
    height: 90vh;
    overflow-y: auto;
    overflow-x: none;
  }
}
`


const ArticleListStyle = styled.div`


    height: 91vh;

@media screen and (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;
    overflow-y: auto;
  }

`;



const ArticleStyles = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border-bottom: 2px solid;

    
  .title-description {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    flex-direction: column;
  }

  .title-description > #title {
    font-size: 16px;
    text-align: left;
    position: relative;
    top: -14px;
  }
  
  .title-description > #date {
    font-size: 12px;
    text-align: left;
    position: relative;
  }

  #description-container {
    text-align: left;
    align-self: flex-start;
    position: relative;
    word-wrap: break-word;
    overflow: hidden;
    grid-area: 4 / 1 / 6 / 3; 
  }

  #display-image {
    overflow: hidden;
    height: auto;
    grid-area: 1 / 2 / 4 / 3; 
    width: 100%;
  }
  

  
 

  


`;






export default AllArticles;