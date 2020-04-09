import React, {useContext} from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import logo from '../images/400dpiLogo.jpg'
import Mailchimp from 'react-mailchimp-form'
import {authContext} from './providers/AuthProvider'
import {Link} from 'react-router-dom'

const CommingSoon = () => {

  const { signout, token} = useContext(authContext)
  
  
  return (
    <>
      <h1>
      Coming soon  
      </h1>
          <img className='logo' src={logo} />
          <h2 id="subscribe-title">Subscribe to our news letter.</h2>

      <MailchimpSubscribe id="news-letter" url={process.env.REACT_APP_MAILCHIMP_ACTION_URL}
        />
        {token !== '' && <button id="signout-button" onClick={() => signout()}>sign out</button>}
        <Link to='/write-article'>write an article</Link>
        <br />
        <Link to='/articles'>Read articles </Link>
        
    </>
  );
};

export default CommingSoon;