import React, {useState, useContext, useEffect} from 'react';
import {articleContext} from  '../providers/ArticleProvider'

const TextArea = (props) => {
  const [text, setText] = useState({textarea: ''})
  const [textForm, setTextForm] = useState(false)
  const {content,
          count,
          setContent, 
          submitContent} = useContext(articleContext)


  const {type, id,} = props 
  
  
  useEffect( () => {
    
  },[])
  
  
  
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setText(prev => ({...prev, [name]: value}))
  }

  console.log(props.id, count, text)
  
  return (
    <>
    
    {textForm ? <>
      <div id='edit-piece'>
      <p>{text.textarea}</p>
        <button id={`delete-article-piece${count}`}>delete</button>
        <button id={`delete-article-piece${count}`} onClick={() => setTextForm(prev => (!prev))}>edit</button>
      </div>

      </>
    :
    <>
    <textarea name="textarea" 
    onChange={handleChange}
     id={`textarea${props.id}`} cols={window.innerWidth / 8} rows="10">{text.textarea}</textarea>
    <br />
              <button onClick={() => props.passContent(text, setTextForm)}>save paragraph</button> 
    </>
  }
  
    
    </>
  );
};

export default TextArea
