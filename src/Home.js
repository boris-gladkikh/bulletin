import React from "react";
import PostList from "./PostList";

/**
 * Renders welcome message and PostList component
 */

function Home({posts}) {
  return (
    <div>
      <h2>Welcome to MicroBlog!</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default Home;