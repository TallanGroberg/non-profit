import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link , useParams} from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import Header from './Header'
import Fade from 'react-reveal/Fade'



const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const {token, signout} = useContext(authContext)
    
  
  return (<>
      <Header setMenu={setMenu} menu={menu} />
    <NavStyle>
      
      <div onClick={() => setMenu(false)} className={menu ? 'full-screen' : 'hidden'}>
        <Fade right unmountOnExit when={menu}>
          <div  className='links'>
            <Link to='/'>Home</Link>
            <Link to="/articles/business" >Business</Link>
            <Link to="/articles/art" >Art</Link>
            <Link to="/articles/recent" >Recent</Link>
            <Link to="/articles/politics" >Politics</Link>
            <Link to="/articles/trending" >Trending</Link>
            <Link to='/write-article'>Write an Article</Link>
            <Link to='/profile'>Profile</Link>
            {token === localStorage.getItem('token') ? <button onClick={signout}>sign out</button> : <Link to='/signin'>Sign in</Link>}
          </div>
        </Fade>
      </div>
    </NavStyle>
  </>);
};

const NavStyle = styled.div`
    margin-top: 48px;
   .full-screen {
     position: fixed;
     z-index: 1;
     opacity: 9.0;
    height: 100vh;
    width: 100vw;
  }
   .hidden {
    display: none;
  }
  
   .links {
    position: fixed;
    
    display: flex;
    
    flex-direction: column;
    width: 28%;
    right: 0;
    background-color: white;
    height: 82vh;
    -webkit-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 34px -14px rgba(0,0,0,0.75);
}
  }
  .links > a {
    border-bottom: 1px solid #34AF70;
    width: 70%;
    margin: auto;
    transition: 0.3s;
  }
  .links > a:hover {
    border-bottom: 1px solid #daede2;
  }

  
`;

export default NavBar;