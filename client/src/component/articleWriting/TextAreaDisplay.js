import React, {useState, useEffect, useContext} from 'react';
import { articleContext } from '../providers/ArticleProvider';

const TextAreaDisplay = (props) => {
  

  const {submitContent, } = useContext(articleContext)

  const {
          text,
          id,
          setText,
          deleteTextArea,
          saveParagraph,
          } = props

          

          

          const handleChange = (e) => {
            const {name, value} = e.target;
            setText(prev => ({...prev, [name]: value}))
          }

         
  return (<>
    
    {props.textForm === true ? <>
      <div id='edit-piece'>
      <p data-testid="paragraph-displayed" >{text.textarea}</p>
        <button id={`delete-article-piece${id}`} onClick={deleteTextArea} >delete</button>
          <button id={`delete-article-piece${id}`} onClick={() => props.setTextForm(prev => (!prev))}>edit</button>
      </div>

      </>
    :
    <>
    <textarea name="textarea" 
      onChange={handleChange}
        id={`textarea${props.id}`} 
          title='textarea'
          value={text.textarea} 
            cols={window.innerWidth / 8} 
              rows="10">{props.text.textarea}</textarea>
    <br />
              <button onClick={saveParagraph}>save paragraph</button> 
    </>
  }
  </>);
};

export default TextAreaDisplay;