import React from 'react';
import styled from 'styled-components'
import thumbsUp from '../../images/wireFrameImages/thumsup.png'

const Likes = (props) => {

  const {likes } = props
  return (
    <LikeStyles>
      <div className="likes">
      <img id='thumbs-up' src={thumbsUp} style={{height: 10, width: 10}} alt='thumbs up' />
        <p id="number" data-testid='likes'>{likes}</p>
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
  justify-content: flex-end;
  height: 20px;

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
`;

export default Likes;