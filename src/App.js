import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation";
import PostList from "./PostList";
import PostDetail from "./PostDetail"
import Home from "./Home";
import NewAndEditPostForm from "./NewAndEditPostForm";


/**
 * TBD
 */

function App() {
  const [posts, setPosts] = useState([]);

  function addPostToState(data){
    setPosts((posts)=>(
      [...posts, {...data}]
    ));
  }
  console.log("this is posts in App", posts)


  return (
    <div className="MicroBlog-App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path= "/posts">
            <PostList posts={posts} />
          </Route>
          <Route exact path= "/posts/:id">
            <PostDetail posts={posts}/>
          </Route>
          <Route exact path= "/new">
            <NewAndEditPostForm addPostToState={addPostToState}/>
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
