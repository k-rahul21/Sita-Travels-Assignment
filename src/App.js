import React, { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPostsHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data));
  };
  return (
    <div className="App">
      <section>
        <button onClick={fetchPostsHandler}>Fetch Posts</button>
      </section>
      <section>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}

export default App;
