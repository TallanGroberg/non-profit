import React from 'react';
import ReactPlayer from 'react-player'
import styled from 'styled-components'


const Content = (props) => {

  const {content, article} = props

  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

  const displayContent = () => {
    if(content.image && content.image !== article.displayImage) {

      return <img data-testid='image' src={content.image} />
    } else if(content.video) {

      return <ReactPlayer 
      data-testid="video"
      style={{margin: 'auto', left: 0, right: 0, }}
      
      url={content.video} 
      controls
        />
    } else if(content.textarea) {

      return <p data-testid='paragraph'>{content.textarea}</p>
    }
  }

  return (
    <>
      <ContentStyle>
      {displayContent()}
      </ContentStyle>
    </>
  );
};

const ContentStyle = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    

  #video {
    
  }
  }
  
`;

export default Content;