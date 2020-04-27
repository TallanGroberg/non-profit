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
            if(props.article !== undefined) {
              setText({textarea: props.article.textarea, orderAppear: props.id})
                setTextForm(true)
            }
          },[props])
          
          

  
  
          const deleteTextArea = async() => {
            setParagraphDeleted(prev => (!prev))
              const filteredContent = await content.filter(input => {
                return input.orderAppear !== id
            })
            setContent(filteredContent)
              const filteredInputs = await articleForWriter.filter( (input,index) => {
                return input.props.id !== id
              })
              setArticleForWriter(filteredInputs)
          }

          const saveParagraph = () => {
            setTextForm(prev => (!prev))
            submitContent(text)
          }
  
  
  


  
  return (<div data-testid='text-area-display'>
    {paragraphDeleted ?
    null
    :
    <TextAreaDisplay 
      key={id}
      id={id}
      text={text}
      textForm={textForm}
      setText={setText}
      setTextForm={setTextForm}
      saveParagraph={saveParagraph}
      setParagraphDeleted={setParagraphDeleted}
      deleteTextArea={deleteTextArea}
    />
  }
    
  </div>);
};

export default TextArea
