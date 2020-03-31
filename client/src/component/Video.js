import React, {useState} from 'react';
import ReactPlayer from 'react-player'
const Video = () => {
  const [videoUrl, setVideoUrl] = useState('')
 
  const [videoAsFile, setVideoAsFile] = useState('')
  const [videoForm, setVideoForm] = useState(true)
  console.log(videoForm, videoUrl)
  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

  const handleSubmit =  (e) => {
    e.preventDefault()
    setVideoForm(false)
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setVideoUrl(value)
  } 

  return (<>
    {videoForm ? 
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            id='video-input-field'
            placeholder={videoUrl === "" ? 'video url' : videoUrl} 
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
          url={videoUrl} 
          controls
            />
      </> 
  }
  </>);
};

export default Video;