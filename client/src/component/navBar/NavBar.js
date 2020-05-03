import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link , useParams} from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import Header from './Header'

const NavBar = () => {
  const [menu, setMenu] = useState(true)
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

  
  .links {
    flex-direction: row;

    margin-top: 64px;
  }
 

`;

export default NavBar;