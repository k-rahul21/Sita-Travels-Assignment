import React, { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostsHandler = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
  return (
    <div className="App">
      <section>
        <button onClick={fetchPostsHandler}>Fetch Posts</button>
      </section>
      <section>
        {!isLoading && posts.length > 0 && <PostsList posts={posts} />}
        {!isLoading && posts.length === 0 && !error && <p> Found no posts.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </div>
  );
}

export default App;
