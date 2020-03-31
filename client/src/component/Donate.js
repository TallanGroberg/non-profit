import React, {useState} from 'react';
import { CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components'


const Donate = (props) => {
  const [complete, setComplete] = useState(false)
  const [fail, setFail] = useState(false)
  const [error,setError] = useState([])

  const {stripe} = props

  const sendReceipt = () => {
    console.log('send Reciept')
  }

  const submit = async () => {

    
    let {token} = await stripe.createToken({name: "Name"});

    await token !== undefined ? axios.post('/charge',{
      headers: {"Content-Type": "text/plain"},
      token: token.id,  
      amount: 1000,
    })
    .then( async res => {
    res.status === 200 && setComplete(true)
    sendReceipt()
  })
  .catch(err => {
    setFail(true)
  })
  : handleError('you have to enter a valid credit card to donate')
}

      const handleError = (arg) => {
        setError(prev => ([...prev, arg]))
      }
  

  return (<>
      {complete && <p>success! Thank you so much for your donation.</p>}

    <CardStyle> 
      <p>donate 10.00$</p>
      <CardElement  id='card-element' />
      <button id="checkout-button" onClick={submit}>submit</button>
     
    </CardStyle>
  </>);
};

const CardStyle = styled.div`
  
  display: grid;
    width: 80%;
    grid-template-rows: 1fr 2fr 1fr;
    grid-auto-flow: column;
    grid-gap: 5pt;
    margin: auto;
    left: 0;
    right: 0;
    margin-bottom: 10pt;
    box-shadow: 0px 0px 9px -6px rgba(0,0,0,0.75);
    #checkout-button {
    box-shadow: 0px 0px 9px -6px rgba(0,0,0,0.75);
      
  
`;


export default injectStripe(Donate);