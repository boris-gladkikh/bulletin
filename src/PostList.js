import React from 'react';
import PostCard from "./PostCard";
import {useSelector, shallowEqual} from "react-redux";



// post:
// {{title: "", depostId: scription:"", body""}}

// comments:
//  {postId: [{commentId: commentId, text: text}]}


//renders list of all available posts with post card child components

function PostList() {


  //since it is a nested object data structure, how do we compare equality on the nested objects? 
  const posts = useSelector((st)=> st.posts, shallowEqual);
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
    {Object.values(posts).map((p,idx)=>(
      <PostCard title={p.title} description={p.description} id={postIds[idx]} key={postIds[idx]} />
    ))}

    </div>
  );
}
}

export default PostList;

