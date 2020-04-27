
import React, {useContext} from 'react';
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'

const Header = () => {

  const {token} = useContext(authContext)

  return (<>
      <HeaderStyles>
        <div id='image-container'>
            <img id='logo' src={Logo} />
              {token === localStorage.getItem('token') && token !== '' ?
              <img id='avatar' src={Avatar} />
              :
              <div id='line-container'>
                <p id='top-line'></p>
                  <p id='bottom-line'></p>
              </div>
              }
        </div>
      </HeaderStyles>
  </>);
};

const HeaderStyles = styled.div`
display: flex

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

#line-container {
  height: 12px;
  z-index: 1;
  align-content: right;
  max-width: 55px;
  position: fixed;
  top: 0px;
  right: 0;
}
#top-line {
  border: 1px solid;
  border-radius: 8%;
  
  width: 24px;
  right: 0;
}
#bottom-line {
  border-radius: 8%;
  border: 1px solid;
  width: 12px;
  right: 0;
}
`;

export default Header;