import { useEffect } from "react";
import PostsList from "../components/PostsList";

const HomePage = (props) => {
  const { isLoading, posts, error, fetchHandler } = props;
  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <div>
      {!isLoading && posts.length > 0 && <PostsList posts={posts} />}
      {!isLoading && posts.length === 0 && !error && <p> Found no posts.</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
