import React, {useState} from 'react';


const TextArea = (props) => {
  const [text, setText] = useState('')
  console.log(text,  )

  const {type,} = props 
  console.log(props.id - 1)
  
  
  
  
  
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setText(prev => (value))
  }
  
  return (
    <>
    <textarea name="" 
    onChange={handleChange}
     id={`textarea${props.id - 1}`} cols={window.innerWidth / 8} rows="10"></textarea>
    <br />
    </>
  );
};

export default TextArea
