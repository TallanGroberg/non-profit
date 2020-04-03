import React from 'react';

const WritersDisplay = (props) => {

  const {count,} = props
  return (
    <>
    <div id={`article-piece${count}`}>
      <div id='edit-piece'>
        <button id={`delete-article-piece${count}`}>delete</button>
        <button id={`delete-article-piece${count}`}>edit</button>
      </div>
      {props.input}
    </div>
      </>
  );
};

export default WritersDisplay;