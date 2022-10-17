import React from "react";
import { Link, useParams } from "react-router-dom";
import "../components/PostsList.css";

const PostDetail = (props) => {
  const { updatedPost } = props;
  const { postId } = useParams();
  const getPostDetails = (posts, postId) => {
    return posts.find((post) => post.id == postId);
  };

  const post = getPostDetails(updatedPost, postId);

  return (
    <div className="post-detail-card">
      <p>{postId}</p>
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
      <Link to="/">See All</Link>
    </div>
  );
};

export default PostDetail;
