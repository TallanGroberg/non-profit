import React from 'react';

const WritersDisplay = (props) => {

  console.log(props.count)
  return (
    <>
    <div id={`article-piece${props.count}`}>
      {props.input}
    </div>
      </>
  );
};

export default WritersDisplay;