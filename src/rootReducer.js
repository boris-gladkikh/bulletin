import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_POSTS } from "./actionTypes";
import updateApiDataSimplePosts from "./helpers"

//API Data Structure
// [
//   {
//     "id": 1,
//     "title": "First Post",
//     "description": "Best post ever!",
//     "votes": 0
//   },
//   {
//     "id": 2,
//     "title": "Second Post",
//     "description": "A very good post!",
//     "votes": 0
//   }
// ]


//data structure of store:
// simplePosts:
// {postId: {postId: "", title: "", description:"", votes: ""}}
// posts:
// {postId: {postId: "", title: "", description:"", votes: "", body""}}
// comments:
//  {postId: [{commentId: commentId, text: text}]}






const INITIAL_STATE = {
  simplePosts: {},
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

    case LOAD_POSTS: {
      let posts = updateApiDataSimplePosts(action.posts);

      return ({
        ...state,
        simplePosts: {...state.simplePosts, ...posts}
      })
    }

    /** Post comments section */
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




