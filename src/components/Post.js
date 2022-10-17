import "./PostsList.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title } = props;
  return (
    <li className="post">
      <h2>{title} </h2>
      <Link to={`/posts/${id}`}>View Details</Link>
    </li>
  );
};

export default Post;
