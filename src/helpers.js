export default function updateApiDataSimplePosts(dataArray) {
  let dataObject = {}

  for (let i = 0; i < dataArray.length; i++) {
    let { id, title, description, votes } = dataArray[i];

    if (dataObject[id] === undefined) {
      dataObject[id] = { postId: id, title, description, votes }
    }

  }
  return dataObject;
}