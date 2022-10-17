import "./PostsList.css";
import Post from "./Post";

const PostsList = (props) => {
  return (
    <ul className="post-list">
      {props.posts.map((post) => (
        <Post key={post.id} title={post.title} id={post.id} />
      ))}
    </ul>
  );
};

export default PostsList;
