import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation";
import PostList from "./PostList";
import PostDetail from "./PostDetail"
import Home from "./Home";
import NewAndEditPostForm from "./NewAndEditPostForm";


/**
 * State
 * -- posts:
 * [{id: id, title: title,
 *   descrip :descrip,
 *   body: body}]
 */

function App() {
  const [posts, setPosts] = useState([]);

  //adds a post to our posts state, to appear on our post list.

  function addPostToState(data) {
    setPosts((posts) => (
      [...posts, { ...data }]
    ));
  }

  //edits post in state, replacing the post with updated information
  function editPostInState(data) {
    let removedPost = posts.filter(p => p.id !== data.id);
    setPosts(posts => (
      [...removedPost, { ...data }]
    ));
  }

  //delete post from state
  function deletePostFromState(id) {
    setPosts(posts => (
      posts.filter(p => p.id !== id)
    ));
  }


  return (
    <div className="MicroBlog-App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/posts">
            <PostList posts={posts} />
          </Route>
          <Route exact path="/posts/:id">
            <PostDetail
              deletePostFromState={deletePostFromState}
              posts={posts}
              editPostInState={editPostInState} />
          </Route>
          <Route exact path="/new">
            <NewAndEditPostForm addPostToState={addPostToState} />
          </Route>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
