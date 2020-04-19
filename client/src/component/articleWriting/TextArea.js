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

          useEffect( () => {
            console.log(text)
            if(props.textarea !== undefined) {
              setText({textarea: props.textarea, orderAppear: props.id})
            }
          },[])
          

  
  
          const deleteTextArea = async() => {
            setParagraphDeleted(prev => (!prev))
            const filteredContent = await content.filter(input => {
              return input.orderAppear !== id 
            })
            submitContent(filteredContent)
              const filteredInputs = await articleForWriter.filter( (input,index) => {
                return input.props.id !== id
              })
              setArticleForWriter(filteredInputs)
          }
  
  
  


  
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
