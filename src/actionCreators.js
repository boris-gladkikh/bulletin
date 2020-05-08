import {ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from "./actionTypes";

//TODO: define payload in these actions
//example of a data structure is very helpful to the reader

export function addPost(postId, payload){
  return {
    type: ADD_POST,
    postId,
    payload

  };
}

export function removePost(postId){
  return {
    type: REMOVE_POST,
    postId
  };
}

export function editPost(postId, payload){
  return {
    type: EDIT_POST,
    postId,
    payload
  };
}

export function addComment(postId, payload){
  return {
    type: ADD_COMMENT,
    postId,
    payload
  };
}

export function deleteComment(postId, commentId){
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  };
}


