import React, { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { Link } from "react-router-dom";
import PostDetail from "./pages/PostDetail";

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
      <nav>
        <Link to="/">
          <button onClick={fetchPostsHandler}>Home</button>
        </Link>
        <Link to="/upload-post">
          <button onClick={() => setIsFormVisible(true)}>Add Post</button>
        </Link>
      </nav>
      <Routes>
        <Route
          path="upload-post"
          element={
            <AddPost
              onAddPost={addPostHandler}
              isFormVisible={isFormVisible}
              refreshHandler={refreshFeedHandler}
            />
          }
        />
        <Route
          path="/"
          element={
            <HomePage
              isLoading={isLoading}
              posts={updatedPosts}
              error={error}
              fetchHandler={fetchPostsHandler}
            />
          }
        />
        <Route
          path="/posts/:postId"
          element={<PostDetail updatedPost={updatedPosts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
