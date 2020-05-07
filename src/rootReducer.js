import { addPost, removePost, editPost, addComment, deleteComment } from "./actionCreators";
import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";


const INITIAL_STATE = {
  posts: { "one": { title: "test", description: "test descrp", body: " booooooody" } },
  comments: {}

}



// post:
// {postId: {title: "", description:"", body""}}


// comments:
//  {postId: [{commentId: commentId, text: text}]}


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
        posts:{...postsCopy}
      })
    }


    case EDIT_POST: {
      let postsCopy = { ...state.posts };
      console.log("this is our action.postId in our root reducer", action.postId);
      postsCopy[action.postId] = action.payload;
      return ({
        ...state,
        posts:{...postsCopy}
      })

    }

    //====================================================================fix to reflect above state ^^^^
    case ADD_COMMENT: {
      let commentsCopy = { ...state.comments };
      commentsCopy[action.postId] = [...state.comments[action.postId], { ...action.payload }]
      return ({
        ...commentsCopy
      })

    }


    case DELETE_COMMENT: {
      let commentsCopy = { ...state.comments };
      commentsCopy[action.postId].filter(c => c.commentId !== action.commentId);
      return ({
        ...commentsCopy
      })
    }


    default:
      return state;

  }

}

export default rootReducer




