import React, {useState,useContext, useEffect} from 'react';
import {storage} from '../../firebase/index'
import useFileUpload from './../customHooks/useFileUpload'
import { articleContext } from '../providers/ArticleProvider';

import EditImage from './EditImage';


const ImageDisplay = (props) => {
  const initState = { imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState( '')
  const [imageAsUrl, setImageAsUrl] = useState(initState)
  const [isLoading, setIsLoading] = useState(false)
  const [imageForm, setImageForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const {id, count, setImageDelete} = props
  
    const {submitContent,setAboutTheArticle,aboutTheArticle, setArticleForWriter, articleForWriter, content, setContent}= useContext(articleContext)

    useEffect( () => {
      if(aboutTheArticle.displayImage !== '' && id === 'displayImage') {
        setImageAsUrl({ imgUrl: aboutTheArticle.displayImage})
        setImageForm(prev => (false))
      } else if(props.imgUrl !== undefined) {
          setImageAsUrl({imgUrl: props.imgUrl})
      }
    }, [aboutTheArticle.displayImage])


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
        if(props.id === "displayImage") { 
          setAboutTheArticle(prev => ({...prev, displayImage: fireBaseUrl}) )
        }
        submitContent({image: fireBaseUrl, orderAppear: id})
      })
  })
  }

  const editImage = async () => {
    setIsEditing(prev => (!prev))
  }

  const deleteImage = async() => {
    setImageDelete(prev => (!prev))
      if(props.id === "displayImage") { 
        setAboutTheArticle(prev => ({...prev, displayImage: ""}) )
      }
    
    const filtered = await content.filter(input => {
      return input.orderAppear !== id 
    })
    setContent(filtered)

  }
  return (
    <>
      {
        imageAsUrl.imgUrl === '' || imageForm ?
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
        <>
      <img width={window.innerWidth / 8} height={window.innerWidth / 8} src={imageAsUrl.imgUrl} />

        {isEditing && <EditImage
                        imageAsFile={imageAsFile}
                          id={id} 
                          setImageAsFile={setImageAsFile}
                          setIsLoading={setIsLoading}
                          setImageAsUrl={setImageAsUrl}
                          isLoading={isLoading}
                          setIsEditing={setIsEditing}
                           />}
        <button id={`delete-article-piece${count}`} onClick={deleteImage}>delete</button>
          <button id={`delete-article-piece${count}`} onClick={editImage}>{isEditing ? 'hide' : 'edit'}</button>
        </>
      }
    </>
  );
};

export default ImageDisplay;