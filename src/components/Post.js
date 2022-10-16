import "./PostsList.css";

const Post = (props) => {
  return (
    <li className="post">
      <h2>{props.title} </h2>
    </li>
  );
};

export default Post;
