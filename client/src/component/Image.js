import React, {useState} from 'react';
import styled from 'styled-components'
import {storage} from '../firebase/index'

function Image() {
  const initState = { imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(initState)
    const [isLoading, setIsLoading] = useState(false)
    console.log(imageAsUrl)

   
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
          setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        })
    })
    }


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
