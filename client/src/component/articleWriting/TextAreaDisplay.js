import React, {useState, useContext} from 'react';
import { articleContext } from '../providers/ArticleProvider';

const TextAreaDisplay = (props) => {
  const [textForm, setTextForm] = useState(false)

  
  const {submitContent, } = useContext(articleContext)

  const {
          text,
          id,
          setText,
          deleteTextArea
          } = props

          const saveParagraph = () => {
            setTextForm(prev => (!prev))
            submitContent(text)
          }

          const handleChange = (e) => {
            const {name, value} = e.target;
            setText(prev => ({...prev, [name]: value}))
          }

         
  return (<>
    
    {textForm ? <>
      <div id='edit-piece'>
      <p>{text.textarea}</p>
        <button id={`delete-article-piece${id}`} onClick={deleteTextArea} >delete</button>
        <button id={`delete-article-piece${id}`} onClick={() => setTextForm(prev => (!prev))}>edit</button>
      </div>

      </>
    :
    <>
    <textarea name="textarea" 
    onChange={handleChange}
     id={`textarea${props.id}`} cols={window.innerWidth / 8} rows="10">{text.textarea}</textarea>
    <br />
              <button onClick={saveParagraph}>save paragraph</button> 
    </>
  }
  
    
  </>);
};

export default TextAreaDisplay;