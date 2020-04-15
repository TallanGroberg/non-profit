import React from 'react';
import styled from 'styled-components'
import {Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/business" >Business</Link>
      <Link to="/art" >Art</Link>
      <Link to="/recent" >Recent</Link>
      <Link to="/politics" >Politics</Link>
      <Link to="/trending" >Trending</Link>
    </div>
  );
};

export default NavBar;