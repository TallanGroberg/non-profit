import React, {useState, useEffect, useContext} from 'react';
import {authContext} from '../providers/AuthProvider'
import {storage} from '../../firebase/index'
import useFormInput from '../customHooks/useFormInput'
import useFileUpload from '../customHooks/useFileUpload'
import {Link} from 'react-router-dom'

const Signup = () => {
  const {imageAsUrl, setImageAsUrl} = useContext(authContext)
  const [isLoading, setIsLoading] = useState(false)
  const [imageAsFile, setImageAsFile] = useState('')
    
    const {handleSignup, inputs,handleChange,} = useFormInput()

  
  const handleImageAsFile = async (e) => {
    e.preventDefault()
    const image = e.target.files[0]
    
    await  setImageAsFile(image)
    await setIsLoading(true)
      handleFireBaseUpload(image)
}

const handleFireBaseUpload = (image) => {

if(imageAsFile === '') {
  console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
}

const uploadTask = storage.ref(`/images/${image.name}`).put(image)

uploadTask.on('state_changed', 
(snapShot) => {
 
  console.log(snapShot)
}, (err) => {
  
  console.log(err)
}, () => {
  storage.ref('images').child(image.name).getDownloadURL()
    .then(async fireBaseUrl => {
      await setIsLoading(false)
      await setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
      
      
    })
})
}
          

  const {error} = useContext(authContext)
  
  return (<>
    {imageAsUrl.imgUrl !== '' && <img height="100" src={imageAsUrl.imgUrl} alt='profile picture'/>}
    <form onSubmit={handleSignup} > 
      <input type='file' placeholder='profile-image'  onChange={handleImageAsFile} />
      <input id='signup-name' placeholder='name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signup-email' placeholder='email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signup-password' placeholder='password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signup-submit-button">Signup</button>

    </form>
      <Link id='link-to-signup' to='/signin'>already have an account?</Link>
      {error.length > 0 && error.map( err => {
      if(err === 'Request failed with status code 400') {
        return <p style={{color: 'red'}}>status 400: Username already taken.</p>
      } else if (err = 'Request failed with status code 500') {
        return <p style={{color: 'red'}}> Username or password have already been taken. </p>
      } else if (err = 'Request failed with status code 401') {
        return <p style={{color: 'red'}}> Username or password have already been taken. </p>
      }
    } )}
  </>);
};

export default Signup;