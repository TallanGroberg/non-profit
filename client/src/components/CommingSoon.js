import React from 'react';
// import MailchimpSubscribe from 'react-mailchimp-subscribe'
import logo from './images/400dpiLogo.jpg'
// import Mailchimp from 'react-mailchimp-form'


const CommingSoon = () => {

  
  return (
    <>
      <h1>
      Coming soon  
      </h1>
          <img className='logo' src={logo} />
          <h2 id="subscribe-title">Subscribe to our news letter.</h2>

      {/* <MailchimpSubscribe id="news-letter" url={process.env.REACT_APP_MAILCHIMP_ACTION_URL}
       */}
        />
    </>
  );
};

export default CommingSoon;