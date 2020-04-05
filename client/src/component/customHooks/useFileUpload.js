import React, {useState, useContext} from 'react';
import {storage} from '../../firebase/index'
import {articleContext} from '../providers/ArticleProvider'

const useFileUpload = (props) => {
  
    
  const {imageAsFile,
          setImageAsFile,
          imageAsUrl, 
          setImageAsUrl,
          isLoading,
          setIsLoading,
          submitContent} = useContext(articleContext)
   
      const handleImageAsFile = async (e) => {
        e.preventDefault()
        const image = e.target.files[0]
        console.log('image as file ',image)
        await  setImageAsFile(image)
        await setIsLoading(true)
          handleFireBaseUpload(image)
    }

    const handleFireBaseUpload = (image) => {

    console.log('start of upload')
   
    // async magic goes here...
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }

    const uploadTask = storage.ref(`/images/${image.name}`).put(image)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      storage.ref('images').child(image.name).getDownloadURL()
        .then(async fireBaseUrl => {
          await setIsLoading(false)
          await setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))

          submitContent({image: fireBaseUrl})
        })
    })
    }



  return {
    handleImageAsFile,
    imageAsUrl,
    isLoading,
  };
};

export default useFileUpload;