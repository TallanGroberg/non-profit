import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link , useParams} from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import Header from './Header'
import Fade from 'react-reveal'


const NavBar = () => {
  const [menu, setMenu] = useState(true)
  const {token,} = useContext(authContext)
    
  
  return (<>
      <Header setMenu={setMenu} menu={menu} />
    <NavStyle>
     

      <Fade right when={menu}>
      <div onClick={() => setMenu(false)} className="links">
        <Link  to="/articles/business" >Business</Link>
        <Link  to="/articles/art" >Art</Link>
        <Link  to="/articles/recent" >Recent</Link>
        <Link  to="/articles/politics" >Politics</Link>
        <Link  to="/articles/trending" >Trending</Link>
        <Link  to='/profile'>Profile</Link>
        <Link  to='/write-article'>Write an Article</Link>
      </div>
      </Fade>
      
    </NavStyle>
  </>);
};

const NavStyle = styled.div`
  
  
  > .links {
    position: fixed;
    justify-content: space-evenly;
    align-content: center;
    z-index: 2;
    border: 1px solid black;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    
    margin-top: -36px;
    width: 80%;
    right: 12px;
    background-color: white;
    height: 80%;
    -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
  }
  .links > a {
    border-bottom: 1px solid #34AF70;
    width: 40%;
    margin: auto;
  }
 

`;

export default NavBar;