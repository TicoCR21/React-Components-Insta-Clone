// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [ postComments, setPostComments ] = useState( props.comments );
  return (
    <div>
      { postComments.map( postComment => <Comment comment = { postComment } />) }
      <CommentInput changeComment = { setPostComments }/>
    </div>
  );
};

export default CommentSection;
