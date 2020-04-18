import React, {useState} from 'react';
import Axios from 'axios';

const SendEmailForPasswordChange = () => {
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState('')
  
  const sendMail = (_id) => {
    let passwordUrl = process.env.NODE_ENV === 'development' ? 
    `http://localhost:3000/change-password/${_id}` 
    : 
    `https://ethiopianjustice.herokuapp.com/change-password/${_id}`
    const emailAndInfo = {
      email: email,
        subject: 'Password change',
          name: 'EIEJ web service', 
            text: `visit the link below to change your password \n ${passwordUrl}`}
    Axios.post('/feedback', emailAndInfo)
      .then(res => {
        res.status === 200 && setResponse('successfully sent, you should be recieving an email shortly.')
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.get('/users/email/' + email)
    .then(res => {
      
      sendMail(res.data._id)
    })
  }

  const handleChange = (e) => {
    const{value} = e.target;
    setEmail(value)
  }

  return (
    <div>
      <h4>enter the email associated with your account</h4>
      <form onSubmit={handleSubmit} >
        <input 
        type="email" 
          placeholder='Email' 
            onChange={handleChange} 
              value={email}
        />
        <button>submit</button>
      </form>
      {response !== '' && <p>{response}</p>}
    </div>
  );
};

export default SendEmailForPasswordChange;