import React from 'react';
import ReactPlayer from 'react-player'
const Content = (props) => {

  const {content, article} = props

  const videoWidth = window.innerWidth - 32;
  const videoHeight = window.innerWidth - 160;

  const displayContent = () => {
    if(content.image && content.image !== article.displayImage) {

      return <img src={content.image} />
    } else if(content.video) {

      return <ReactPlayer 
      style={{margin: 'auto', left: 0, right: 0, }}
      width={videoWidth}
      height={videoHeight}
      url={content.video} 
      controls
        />
    } else if(content.textarea) {

      return <p>{content.textarea}</p>
    }
  }

  return (
    <>
      {displayContent()}
    </>
  );
};

export default Content;