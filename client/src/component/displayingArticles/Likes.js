import React from 'react';
import styled from 'styled-components'
import thumbsUp from '../../images/wireFrameImages/thumsup.png'

const Likes = (props) => {

  const {likes } = props
  return (
    <LikeStyles>
      <img id='thumbs-up' src={thumbsUp} style={{height: 10, width: 10}} alt='thumbs up' />
        <p data-testid='likes'>{likes}</p>
    </LikeStyles>
  );
};

const LikeStyles = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: row-reverse;

#thumbs-up {
  top: 21px;
  position: relative;
}
`;

export default Likes;