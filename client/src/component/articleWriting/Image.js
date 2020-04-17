import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {storage} from '../../firebase/index'
import useFileUpload from './../customHooks/useFileUpload'
import { articleContext } from '../providers/ArticleProvider';

import ImageDisplay from './ImageDisplay'

function Image(props) {
  
  const [imageDeleted, setImageDelete] = useState(false)


  return (
    <>
      {imageDeleted ? 
      null
      :
      <ImageDisplay id={props.id}
          setImageDelete={setImageDelete}
             />
    }



    </>
  );
}



export default Image;
