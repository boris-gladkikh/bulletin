import React from "react";


/**
 * comments state {postId: [{commentId: commentId, text: text}]}
 */

function PostDetail({ post }) {

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.body}</p>
    </div>
  )
 
}

export default PostDetail