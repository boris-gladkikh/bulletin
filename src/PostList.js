import React, { useEffect } from 'react';
import PostCard from "./PostCard";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSimplePostsFromAPI } from "./actionCreators";

//data structure of store:
// simplePosts:
// {postId: {postId: "", title: "", description:"", votes: ""}}
// posts:
// {postId: {postId: "", title: "", description:"", votes: "", body""}}
// comments:
//  {postId: [{commentId: commentId, text: text}]}

//renders list of all available posts with post card child components

function PostList() {
  //since it is a nested object data structure, how do we compare equality on the nested objects?
  const postIdTosimplePosts = (useSelector((st) => st.simplePosts, shallowEqual))
  const simplePosts = Object.values(postIdTosimplePosts);
  let postIds = Object.keys(postIdTosimplePosts);
  const dispatch = useDispatch();

  // request simple posts from backendAPI and load into store state.simplePOsts
  useEffect(function fetchSimplePosts() {
    dispatch(getSimplePostsFromAPI())
  }, [dispatch]);

  if (postIds.length === 0) {
    return (
      <div>
        No posts yet...
      </div>
    )
  } else {

    return (
      <div>
        {simplePosts.map(({ title, description, postId }) => (
          <PostCard title={title} description={description} id={postId} key={postId} />
        ))}

      </div>
    );
  }
}

export default PostList;
