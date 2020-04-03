import React, {useState} from 'react';
import styled from 'styled-components'
import {storage} from '../../firebase/index'
import useFileUpload from './../customHooks/useFileUpload'

function Image() {
  
    const {handleImageAsFile,
            imageAsUrl,
              isLoading,
            } = useFileUpload()

  return (
    <>
      {
        imageAsUrl.imgUrl === '' ?
        <>
          <form onChange={handleImageAsFile}>
          <input 
          id='img-upload'
          type="file"
          />
          </form>
          {isLoading && <p>Loading</p>}
        </>
      :
        
      <img width={window.innerWidth / 8} height={window.innerWidth / 8} src={imageAsUrl.imgUrl} />
      }



    </>
  );
}



export default Image;
