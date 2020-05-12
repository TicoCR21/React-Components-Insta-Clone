//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = () => 
{
  // set up state for your data
  const [ postsData, setPostsData ] = useState( dummyData );

  return (
    <div className="posts-container-wrapper">
      { postsData.map( postData => <Post post = { postData } />  ) }
    </div>
  );
};

export default PostsPage;
