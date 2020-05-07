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

const handleChange = e => {
    const { name, value } = e.target
    setInputs(prev => ({...prev, [name]: value}))
}
const handleSubmit = e => {
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
        </EmailForm>
    </FormContainer>    
)

