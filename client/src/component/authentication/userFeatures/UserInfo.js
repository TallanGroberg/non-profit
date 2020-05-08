import React, {useState, useContext, useEffect} from 'react';
import {authContext} from '../../providers/AuthProvider'
import useFormInput from '../../customHooks/useFormInput'
import {Link} from 'react-router-dom'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import useFileUpload from '../../customHooks/useFileUpload'
const UserInfo = () => {
  
  const {user} = useContext(authContext)
  const {handleEdit, handleChange, inputs, setInputs} = useFormInput()
  const {handleImageAsFile,
    imageAsUrl,
    imageAsFile,
    setImageAsFile,
    isLoading,} = useFileUpload()
  
  useEffect( () => {
    document.title = "Profile Settings"
  }, [])


  return (<>

    {imageAsUrl.imgUrl !== '' && <img src={imageAsUrl.imgUrl} alt='profile image'/>}
    <input type='file' onChange={handleImageAsFile}/>
    <form onSubmit={handleEdit}>
        <p>Name</p>
      <input name='name' onChange={handleChange} type="text" value={inputs.name}/>
        <p>Email</p>
      <input name='email' onChange={handleChange} type="text" value={inputs.email}/>
      <br />
      <button>Change name and email.</button>

      <br />
      <Link to='/send-email'>Change your password</Link>
    </form>
    <p>Enter your email to change news letter preference.</p>
        <MailchimpSubscribe id="news-letter" url={process.env.REACT_APP_MAILCHIMP_ACTION_URL} />
  </>);
};

export default UserInfo;