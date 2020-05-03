
import React, {useContext, useEffect} from 'react';
import styled from 'styled-components'
import {Link, useParams } from 'react-router-dom'
import Logo from '../../images/400dpiLogo.png'
import Avatar from '../../images/wireFrameImages/avatar.png'
import {authContext} from '../providers/AuthProvider'

const Header = () => {
    console.log(useParams())

  const {token, catagory} = useContext(authContext)


  
  
  return (<>
      <HeaderStyles>
        <br />
        
      </HeaderStyles>
  </>);
};

const HeaderStyles = styled.div`

`;

export default Header;