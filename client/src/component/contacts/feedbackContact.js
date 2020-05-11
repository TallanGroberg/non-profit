import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
`;
const Title = styled.div`

`;
const EmailForm = styled.form`

`;



const [ inputs, setInputs ] = useState({ email: '', subject: '', description: '' })

function handleChange(e) {
    const { name, value } = e.target
    setInputs(prev => ({...prev, [name]: value}))
}
function handleSubmit(e) {
    e.preventDefault()
    const { email, name, subject, description } = inputs
    axios.post('/feedback', {
        email,
        name,
        subject,
        text: descripton
    })
}

return(
    <FormContainer>    
        <Title>Leave us some FeedBack</Title>
        <EmailForm onSubmit={handleSubmit}>
            <input type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} />
            <br />
            <input type="text" placeholder="name" name="name" value={inputs.name} onChange={handleChange} />
            <br />
            <input type="text" placeholder="subject" name="subject" value={inputs.subject} onChnave={handleChange} />
            <br />
            <textarea name="description"  placeholder="Please submit your feedback!" value={inputs.description} onChange={handleChange} cols="30" rows="10"></textarea> 
            
            <button>Submit Feedback!</button>
        </EmailForm>
    </FormContainer>    
)

