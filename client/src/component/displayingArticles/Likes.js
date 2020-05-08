import React, {useState} from 'react';
import styled from 'styled-components'
import thumbsUp from '../../images/wireFrameImages/thumsup.png'
import heart from '../../images/wireFrameImages/heart.jpg'
import {bearerAxios} from '../providers/AuthProvider'
import Fade from 'react-reveal/Fade'

const Likes = ({likes,  article }) => {
  const [liked, setLiked] = useState(false)


  const handleLike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/like/${_id}`)
    .then(res => {
      
    })
    .catch(err => console.log(err))
  }
  const handleUnlike = (_id) => {
    setLiked(prev => (!prev))
    bearerAxios.put(`/article/unlike/${_id}`)
    .then(res => {
      
    })
    .catch(err => console.log(err))
  }


  
  return (
    <LikeStyles>
      <div 
        className="likes"
          data-testid='like-unlike-button' 
            onClick={liked && article !== undefined ?
                  () => handleUnlike(article._id)
                    : 
                  () => handleLike(article._id)
                } 
        >
          <Fade left unmountOnExit when={liked}>
          <img id='heart' src={heart} style={{height: 10, width: 10}} />
          </Fade>
          
          <Fade right collapse unmountOnExit when={!liked}>

          <img id='thumbs-up'
          src={thumbsUp}
          style={{height: 10, width: 10}} alt='thumbs up' 
          />
          </Fade>
        
            <p id="number" data-testid='likes'>{liked ? likes + 1 : likes }</p>
      </div>
    </LikeStyles>
  );
};

const LikeStyles = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: flex-start;
  height: 20px;
  margin-left: 4px;

.likes  {
  position: relative;
  display: flex;
    flex-direction: row;

}
#number {
 position: relative;
 top: -16px;
    right: 4px;
}
#thumbs-up {
  position: relative;
  right: 4px;
  top: 4px;
}
#heart {
  position: relative;
  right: -6px;
  top: -8px;

}
`;

export default Likes;