import React, {useState, useContext} from 'react';
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
const Video = (props) => {
 
  const [videoForm, setVideoForm] = useState(true)
  const [videoUrl, setVideoUrl] = useState({video: ''})

  const { submitContent} = useContext(articleContext) 
  const {count, id} = props
  
  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

  const handleSubmit =  (e) => {
    e.preventDefault()
    setVideoForm(false)
    submitContent(videoUrl)
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setVideoUrl(prev => ({...prev,[name]: value,}))
  } 

  return (<>
    {videoForm ? 
      <form onSubmit={handleSubmit}>
          <input
            name='video'
            type="text"
            id='video-input-field'
            placeholder='video url' 
            onChange={handleChange}
            />
          <button
          id="video-button">Submit</button>
        </form>
    :
    <>
        <ReactPlayer 
          style={{margin: 'auto', left: 0, right: 0, }}
          width={videoWidth}
          height={videoHeight}
          url={videoUrl.video} 
          controls
            />
            <button id={`delete-article-piece${count}`}>delete</button>
            <button id={`delete-article-piece${count}`} onClick={() => setVideoForm(prev => (!prev))}>edit</button>
      </> 
  }
  </>);
};

export default Video;