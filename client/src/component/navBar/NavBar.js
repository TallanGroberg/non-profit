import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link , useParams} from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import Header from './Header'

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const {token,} = useContext(authContext)
    
  
  return (<>
      <Header setMenu={setMenu} menu={menu} />
    <NavStyle>
      {menu ? 
      <div className="links">
        <Link to="/articles/business" >Business</Link>
        <Link to="/articles/art" >Art</Link>
        <Link to="/articles/recent" >Recent</Link>
        <Link to="/articles/politics" >Politics</Link>
        <Link to="/articles/trending" >Trending</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/write-article'>Write an Article</Link>
      </div>
      :
      null
    }
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

  object-fit: contain;
    max-width: 55px;
    position: fixed;
    left: 2.45%;
    top: -31.9%;
  }
  #avatar {
  
    object-fit: contain;
    max-width: 55px;
    position: fixed;
    top: -205px;
    right: 0;
  }

  .links {
    flex-direction: column;

    margin-top: 64px;
  }
 

`;

export default NavBar;