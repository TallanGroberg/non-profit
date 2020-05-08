import React from 'react';
import {Link } from 'react-router-dom'
import styled from 'styled-components'
const Author = ({article}) => {
  return (<>
        <AuthorStyles className="author">
    <Link to={'/articles/user/' + article.user.name + "/" + article.user._id}>
          <p id='author-name'>{article.user.name}</p>
            {article.user.imgUrl !== '' ?
            <img id='author-image' src={article.user.imgUrl}/> 
            :
              null
            }
        </Link>
        </AuthorStyles>
  </>);
};

const AuthorStyles = styled.div`

 > a{

    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    width: fit-content;
 }
    
  #author-image {
  margin: 4px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  }
`;

export default Author;