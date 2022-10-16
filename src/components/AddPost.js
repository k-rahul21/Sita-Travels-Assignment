import React, { useRef, useState } from "react";
import "./AddPost.css";
import { Link } from "react-router-dom";

const AddPost = (props) => {
  const [message, setMessage] = useState(false);
  const { isFormVisible, refreshHandler } = props;

  const idRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");

  const submitHandler = (event) => {
    setMessage(true);
    event.preventDefault();

    const post = {
      id: idRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    props.onAddPost(post);
  };

  return (
    <section>
      {isFormVisible && (
        <form onSubmit={submitHandler}>
          <div className="input-field">
            <input
              type="number"
              id="id"
              ref={idRef}
              placeholder="Enter the Id"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="title"
              ref={titleRef}
              placeholder="Enter the Title"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="body"
              ref={bodyRef}
              placeholder="Enter the Body"
            />
          </div>
          <button> Upload</button>
        </form>
      )}
      {message && <p>Successfully Uploaded!!</p>}
      <Link to="/">
        <button onClick={refreshHandler}> Go to back to Feed</button>
      </Link>
    </section>
  );
};

export default AddPost;
