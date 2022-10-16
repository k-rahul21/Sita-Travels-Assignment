import React, { useRef } from "react";
import "./AddPost.css";

const AddPost = (props) => {
  const idRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      id: idRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    props.onAddPost(post);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        <input type="number" id="id" ref={idRef} placeholder="Enter the Id" />
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
  );
};

export default AddPost;
