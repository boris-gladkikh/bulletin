import React from 'react';
import PostCard from "./PostCard";
import {useSelector, shallowEqual} from "react-redux";



//data structure of store:
// post:
// {postId: {postId:"", title: "", description:"", body""}} <--------- TODO: include ID in reducer state value as well
// comments:
//  {postId: [{commentId: commentId, text: text}]}


//renders list of all available posts with post card child components

function PostList() {


  //since it is a nested object data structure, how do we compare equality on the nested objects? 
  
  const posts =Object.values(useSelector((st)=> st.posts, shallowEqual));
  let postIds = Object.keys(posts)


  if(postIds.length === 0){
    return (
      <div>
        No posts yet...
      </div>
    )
  } else {
    

  return (
    <div>
    {/* {posts.map(({title,description,postId})=>(
      <PostCard title={title} description={description} id={postId} key={postId} />
    ))} */}
    {posts.map((p,idx)=>(
      <PostCard title={p.title} description={p.description} id={postIds[idx]} key={postIds[idx]} />
    ))}

    </div>
  );
}
}

export default PostList;

