import React from 'react';

const WritersDisplay = (props) => {

  const {count,} = props
    
  return (
    <>
    <div id={`article-piece${count}`}>
      
      {props.input}
    </div>
      </>
  );
};

export default WritersDisplay;