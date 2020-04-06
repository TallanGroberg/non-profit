import React, {useState, useContext, useEffect} from 'react';
import {articleContext} from  '../providers/ArticleProvider'
import TextAreaDisplay from './TextAreaDisplay';

const TextArea = (props) => {
  const [text, setText] = useState({textarea: '', orderAppear: props.id})
  const [textForm, setTextForm] = useState(false)
  const [paragraphDeleted,setParagraphDeleted ] = useState(false)
  
  const {type, id,} = props 
  
  const {content,
          count,
          articleForWriter,
          setArticleForWriter,
          setContent, 
          submitContent} = useContext(articleContext)

          
          

  
  
          const deleteTextArea = async() => {
            setParagraphDeleted(prev => (!prev))
            const filteredContent = await content.filter(input => {
              return input.orderAppear !== id 
            })
            setContent(filteredContent)
              const filteredInputs = await articleForWriter.filter( (input,index) => {
                console.log(input, index)
                debugger
                return input.props.id !== id
              })
              setArticleForWriter(filteredInputs)
          }
  
  
  

  console.log(props.id, count, text)
  
  return (<>
    {paragraphDeleted ?
    null
    :
    <TextAreaDisplay 
      id={id}
      text={text}
      setText={setText}
      setTextForm={setTextForm}
      setParagraphDeleted={setParagraphDeleted}
      deleteTextArea={deleteTextArea}
    />
  }
    
  </>);
};

export default TextArea
