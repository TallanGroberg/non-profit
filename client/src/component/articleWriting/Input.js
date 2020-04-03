import React, {useState} from 'react';


const Input = (props) => {
  const [text, setText] = useState('')
  

  const {type} = props 
  
  
  
  
  
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setText(prev => (value))
  }
  
  return (
    <>
    <input key={props.key} placeholder="start" onChange={handleChange} value={text} /> 
    <br />
    </>
  );
};

export default Input;