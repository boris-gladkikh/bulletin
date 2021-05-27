import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_DETAIL_POST, LOAD_POSTS } from "./actionTypes";
import {updateApiDataSimplePosts, updateApiDataDetailPosts} from "./helpers"

// post detail structure from API
// {
//   "id": 1,
//     "title": "First Post",
//       "description": "Best post ever!",
//         "body": "Everyone loves posting first. I win!",
//           "votes": 0,
//             "comments": [
//               {
//                 "id": 1,
//                 "text": "This is a really great post."
//               },
//               {
//                 "id": 2,
//                 "text": "I learned so much reading this."
//               }
//             ]
// }


//data structure of store:
// simplePosts:
// {postId: {postId: "", title: "", description:"", votes: ""}}
// posts:
// {postId: {postId: "", title: "", description:"", votes: "", body""}}
// comments:
//  {postId: [{commentId: commentId, text: text}]}






const INITIAL_STATE = {
  simplePosts: {},
  posts: {},
  comments: {}

}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      console.log("this is new post", action.payload)
      return ({
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: { ...action.payload }
        },
        simplePosts: {
          ...state.simplePosts,
          [action.postId]: {
            postId: action.postId,
            title:  action.title,
            description: action.description,
            votes:action.votes || 0, 
         }
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

    case LOAD_DETAIL_POST: {
      let post = updateApiDataDetailPosts(action.post);
      return ({
        ...state,
        posts:{...state.posts, ...post}
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




