import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";


//data structure of store:
// post:
// {postId: {title: "", description:"", body""}}
// comments:
//  {postId: [{commentId: commentId, text: text}]}


const INITIAL_STATE = {
  posts: { "one": { title: "test", description: "test descrp", body: " booooooody" } },
  comments: {}

}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      return ({
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: { ...action.payload }
        }
      })

    }

    case REMOVE_POST: {
      let postsCopy = { ...state.posts }
      delete postsCopy[action.postId]
      return ({
        ...state,
        posts: { ...postsCopy }
      })
    }


    case EDIT_POST: {
      let postsCopy = { ...state.posts };
      postsCopy[action.postId] = action.payload;
      return ({
        ...state,
        posts: { ...postsCopy }
      })

    }


    case ADD_COMMENT: {

      let commentsCopy = { ...state.comments };
      if (commentsCopy[action.postId] !== undefined) {
        commentsCopy[action.postId] = [...state.comments[action.postId], { ...action.payload }]
      } else {
        commentsCopy[action.postId] = [{ ...action.payload }]

      }
      return ({
        ...state,
        comments: { ...commentsCopy }

      })
    }


    case DELETE_COMMENT: {
      let commentsCopy = { ...state.comments };
      let filteredComments = commentsCopy[action.postId].filter(c => c.commentId !== action.commentId);
      return ({
        ...state,
        comments: { ...filteredComments }
      })
    }


    default:
      return state;

  }

}

export default rootReducer




