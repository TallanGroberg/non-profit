import React from 'react';
import {Link } from 'react-router-dom'
import styled from 'styled-components'
const Author = ({article}) => {
  return (<>
    <Link to={'/articles/user/' + article.user.name + "/" + article.user._id}>
        <AuthorStyles className="author">
          <p id='author-name'>{article.user.name}</p> 
            <img id='author-image' src={article.user.imgUrl}/> 
        </AuthorStyles>
        </Link>
  </>);
};

const AuthorStyles = styled.div`

 
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    width: fit-content;
    
  #author-image {
  margin: 4px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  }
`;

export default Author;