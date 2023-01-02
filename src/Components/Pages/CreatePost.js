import React, { useState } from "react";
import "../Style/App.css";
import Axios from "axios";



function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const data = {
    userName: userName,
    title: title,
    text: text,
  };

  const submitPost = () => {
    console.log("works");
    console.log(data);

  
    Axios.post("https://salty-beach-75633.herokuapp.com/api/create", data).then((error) => {
      console.log(error)
    })
  };


  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>UserName</label>
        <input
          type="text"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <label>Title</label>
        <input
          type="text"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Text</label>
        <textarea
          onChange={e => {
            setText(e.target.value);
          }}
        />

        <button onClick={submitPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
