import React, { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recentPost, setRecentPost] = useState([]);
  const loadedPost = [];

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

  const addPostHandler = (post) => {
    setIsFormVisible(false);
    fetch(
      "https://sita-travels-assignment-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(post),
      }
    );
    alert("uploaded!!");
  };

  const refreshFeedHandler = () => {
    fetch(
      "https://sita-travels-assignment-default-rtdb.firebaseio.com/posts.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        for (const key in data) {
          loadedPost.push({
            user_id: key,
            id: data[key].id,
            title: data[key].title,
            body: data[key].body,
          });
        }
        setRecentPost(loadedPost);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updatedPosts = recentPost.concat(posts);

  return (
    <div className="App">
      {isFormVisible && (
        <section>
          <AddPost onAddPost={addPostHandler} />
        </section>
      )}
      <section>
        <button onClick={fetchPostsHandler}>Fetch Posts</button>
        <button onClick={() => setIsFormVisible(true)}>Add Post</button>
        <button onClick={refreshFeedHandler}>Refresh</button>
      </section>
      <section>
        {!isLoading && posts.length > 0 && <PostsList posts={updatedPosts} />}
        {!isLoading && posts.length === 0 && !error && <p> Found no posts.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </div>
  );
}

export default App;
