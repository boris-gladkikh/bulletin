import React from 'react';
import PostCard from "./PostCard";


function PostList({posts}) {
  if(posts.length === 0){
    return (
      <div>
        No posts yet...
      </div>
    )
  } else {

  return (
    <div>
    {posts.map(p=>(
      <PostCard title={p.title} description={p.description} id={p.id} key={p.id} />
    ))}
    </div>
  );
}
}

export default PostList;