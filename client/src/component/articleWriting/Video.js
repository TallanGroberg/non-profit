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
    <VideoDisplay count={count} setVideoDeleted={setVideoDeleted} id={id} /> 
  }

  </>);
};

export default Video;