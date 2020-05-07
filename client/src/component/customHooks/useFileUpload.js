import React, {useState,useEffect, useContext} from 'react';
import {storage} from '../../firebase/index'
import {authContext} from '../providers/AuthProvider'
import {articleContext} from '../providers/ArticleProvider'

const useFileUpload = (props) => {
  const {imageAsUrl, setImageAsUrl} = useContext(authContext)
  const [isLoading, setIsLoading] = useState(false)
  const [imageAsFile, setImageAsFile] = useState('')
    
    
   
      const handleImageAsFile = async (e) => {
        e.preventDefault()
        const image = e.target.files[0]
        
        await  setImageAsFile(image)
        await setIsLoading(true)
          handleFireBaseUpload(image)
    }

    const handleFireBaseUpload = (image) => {

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

          
        })
    })
    }



  return {
    handleImageAsFile,
    imageAsUrl,
    imageAsFile,
    setImageAsFile,
    isLoading,
  };
};

export default useFileUpload;