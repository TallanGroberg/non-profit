import React, {useState, useContext} from 'react';
import ReactPlayer from 'react-player'
import { articleContext } from '../providers/ArticleProvider';
import VideoDisplay from './VideoDisplay'
const Video = (props) => {
  const {count, id} = props
  const [videoDeleted, setVideoDeleted] = useState(false)


 
 

  return (<>
    {videoDeleted ? 
    null
  :
    <VideoDisplay count={count}
       videoUrl={props.videoUrl} 
        setVideoDeleted={setVideoDeleted} 
            key={id}
              id={id} /> 
  }

  </>);
};

export default Video;