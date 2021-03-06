
import React, {useContext,useState, useEffect} from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import {Link, useParams } from 'react-router-dom'
import Logo from '../../images/MediumSquareLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'
import SearchForm from '../authentication/userFeatures/SearchForm'
import cross from '../../images/wireFrameImages/cross.png'

const Header = ({menu, setMenu}) => {


  const {token} = useContext(authContext)


  
  
  return (<>
      <HeaderStyles>
        <img id='logo' src={Logo} />

        <div id={ menu ? 'hamburger-open' : 'hamburger-closed'}
          onClick={() => setMenu(prev => (!prev))}
          >
              <Roll
               right when={menu}>
              <div id='hamburger-open'>
                  <img src={cross} alt="" srcset=""/>
                </div>
              </Roll>
              <Fade left cascade when={!menu}>
                <div id='hamburger-closed'>
                  <p id='top-line'></p>
                  <p id='bottom-line'></p>
                </div>
              </Fade>
        </div>
          
            <SearchForm  />
          
          
        <br />
        
      </HeaderStyles>
  </>);
};

const HeaderStyles = styled.div`
    z-index: 1;
    width: 100%;
    top: 0;
    right: 0;
    height: 40px;
    position: fixed;
    background-color: white;


 > #logo {
  position: absolute;
  left: 8px;
  top: 0px;
  height: 48px;
  width: 48px;

}

#hamburger-open {
  align-content: left;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;
  height: 24px;
}


#hamburger-closed > #hamburger-closed {
  z-index: 2;
  position: absolute;
  right: 8px;
  width: 24px;
  height: 34px;
  top: 6px;
}
#hamburger-closed > #top-line {
  position: relative;
  
  width: 20px;
  border-radius: 40px;
  border: 2px solid black;
}
#hamburger-closed > #bottom-line {
  position: relative;
  top: -8px;
  right: -12px;
  width: 8px;
  border-radius: 40px;
  border: 2px solid black;
}

#hamburger-open > #top-line {
  transform: rotate(45deg);
    position: relative;
    top: -6px;
    right: 5px;
    width: 30px;
    border-radius: 40px;
    border: 2px solid black;
}
#hamburger-open > #bottom-line {
  transform: rotate(-45deg);
    position: relative;
    top: -26px;
    right: 5px;
    width: 30px;
    border-radius: 40px;
    border: 2px solid black;
}

#search-form {
  position: relative;
    top: 8px;
    right: 4px;
    
}
}




`;

export default Header;