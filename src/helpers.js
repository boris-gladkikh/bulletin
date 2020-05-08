export function updateApiDataSimplePosts(dataArray) {
  let dataObject = {}

  for (let i = 0; i < dataArray.length; i++) {
    let { id, title, description, votes } = dataArray[i];
    dataObject[id] = { postId: id, title, description, votes }
  }
  return dataObject;
}

export function updateApiDataDetailPosts(responseObject) {
  let { id, title, description, votes, comments, body } = responseObject;
  let dataObject = { [id]: { postId:id, title, description, votes, comments, body } };
  return dataObject;
}


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

