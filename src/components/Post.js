import "./PostsList.css";

const Post = (props) => {
  console.log(props.title);
  return (
    <li className="post">
      <h2>{props.title} </h2>
    </li>
  );
};

export default Post;
