import React, {useContext} from 'react';
import {storage} from '../../firebase/index'
import {articleContext} from '../providers/ArticleProvider'


const EditImage = (props) => {

  const {setImageAsFile, 
          imageAsFile, 
            setIsLoading,
              id,
                isLoading,
                  setImageAsUrl,
                setIsEditing} = props

  const {submitContent, content, setContent, setAboutTheArticle} = useContext(articleContext)


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
      const filtered = await content.filter(input => {
        return input.orderAppear !== id 
      })
      
      await setContent(filtered)
      if(props.id === undefined) { 
        setAboutTheArticle(prev => ({...prev, displayImage: fireBaseUrl}) )
      }
      await submitContent({image: fireBaseUrl, orderAppear: id})
      setIsEditing(prev => (!prev))
    })
})
}


  return (
      <>
          <form onChange={handleImageAsFile}>
          <input 
          id='img-upload'
          type="file"
          
          />
          </form>
          {isLoading && <p>Loading</p>}
    </>
  );
};

export default EditImage;