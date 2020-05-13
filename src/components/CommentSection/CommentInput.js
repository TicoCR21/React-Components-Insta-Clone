// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = props => 
{
  const [ comment, setComment ] = useState( "" );
  function changeComment( e )
  {
    e.preventDefault();
    props.changeComment( prev => prev.concat( {username: "LambdaStudent", text: comment } ) );
    setComment( "" );

  }



  return (
    <form className="comment-form" onSubmit={ changeComment }>
      <input
        type="text"
        value={ comment }
        placeholder="Add comment... "
        onChange = { e => setComment( e.target.value ) }
      />
    </form>
  );
};

export default CommentInput;
