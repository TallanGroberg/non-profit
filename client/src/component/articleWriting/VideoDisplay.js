import React, {useState, useContext, useEffect,} from 'react';
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';


const VideoDisplay = (props) => {

  const {id,  setVideoDeleted} = props
  const [isEditingVideo, setIsEditingVideo] = useState(false)
  const [videoForm, setVideoForm] = useState(true)
  const [videoUrl, setVideoUrl] = useState({video: '', orderAppear: props.id})

  const { submitContent, 
          content, 
          setContent,
          articleForWriter,
          setArticleForWriter} = useContext(articleContext) 
  
  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

    useEffect( () => {
      if(props.videoUrl !== undefined){
        setVideoUrl(prev => ({ video: props.videoUrl, orderAppear: props.id}))
        setVideoForm(false)
      }

    },[props.videoUrl])

  const handleSubmit =  (e) => {
    e.preventDefault()
      setVideoForm(prev => (!prev))
        submitContent(videoUrl)
  }


  const handleChange = (e) => {
    const {name, value} = e.target;
    setVideoUrl(prev => ({...prev,[name]: value,}))
  } 

  const handleVideoEdit = () => {
    setIsEditingVideo(true)
    setVideoForm(prev => (!prev))
  }


  const deleteVideo = async () => {
    setVideoDeleted(prev => (!prev))
    const filteredContent = await content.filter(input => {
      return input.orderAppear !== id 
    })
    setContent(filteredContent)
      const filteredInputs = await articleForWriter.filter( (input) => {
        return input.props.id !== id
      })
      setArticleForWriter(filteredInputs)

  }

  return (<>
    {videoForm ? 
      <form data-testid='video-form'
      onSubmit={handleSubmit}>
          <input
            name='video'
            type="text"
            data-testid='video-input'
            id='video-input-field'
            value={videoUrl.video}
            placeholder={isEditingVideo ? 'Editing video' : 'Video url' }
            onChange={handleChange}
            />
            <button
              id="video-button">
                Submit
            </button>
        </form>
    :
    <>
        <ReactPlayer 
          data-testid='video-player'
          style={{margin: 'auto', left: 0, right: 0, }}
          width={videoWidth}
          height={videoHeight}
          url={videoUrl.video} 
          controls
            />
            <button id={`delete-article-piece${id}`} onClick={deleteVideo}>delete</button>
            <button id={`delete-article-piece${id}`} onClick={handleVideoEdit}>edit</button>
      </> 
  }
  </>);
};

export default VideoDisplay;