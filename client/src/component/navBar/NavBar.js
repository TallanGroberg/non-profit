import React, {useContext} from 'react';
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import Header from './Header'

const NavBar = () => {

  const {token} = useContext(authContext)
  return (<>
    <NavStyle>
      <Header />
      <div className="links">
        <Link to="/business" >Business</Link>
        <Link to="/art" >Art</Link>
        <Link to="/recent" >Recent</Link>
        <Link to="/politics" >Politics</Link>
        <Link to="/trending" >Trending</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/write-article'>Write an Article</Link>
      </div>
    </NavStyle>
  </>);
};

const NavStyle = styled.div`
  display: flex;

#image-container {

  width: 100%;
    position: fixed;
    
    background-color: white;
    height: 39px;
    top: 0px;
    left: -1px;
}
#logo {
  z-index: 1;
  object-fit: contain;
    max-width: 55px;
    position: fixed;
    left: 2.45%;
    top: -31.9%;
  }
  #avatar {
    z-index: 1;
    object-fit: contain;
    max-width: 55px;
    position: fixed;
    top: -205px;
    right: 0;
  }

  .links {
    flex-direction: space-evenly;

    margin-top: 64px;
  }
  a {
    text-decoration: none;
  }

`;

export default NavBar;