import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [postList, setPostList] = useState([]);
  let naviagate = useNavigate();

  useEffect(() => {
    Axios.get("https://zippy-valkyrie-5048e6.netlify.app/api/get")
      .then(data => {
        setPostList(data.data);
        console.log(data.data);
      })
      .then(error => {
        console.log(error);
      });
  }, []);

  const likedPost = id => {
    Axios.get(`https://zippy-valkyrie-5048e6.netlify.app/api/like/${id}`).then(response => {
      alert("You liked a post");
    });
  };
  const deletedPost = id => {
    Axios.get(`https://zippy-valkyrie-5048e6.netlify.app/api/delete/${id}`).then(response => {
      alert("You Deleted");
    }).then((error) => {
      console.log(error)
    });
  };
  return (
    <div className="MainPage">
      <div className="PostContainer">
        {postList.map((val, key) => {
          return (
            <div
              className="Post"
              key={key}
              onClick={() => {
                naviagate(`/post/${val.id}`);
              }}
            >
              <h1>Title: {val.title}</h1>
              <p>
                Text:{" "}
                {val.post_text.length > 500
                  ? val.post_text.substring(0, 500) + "..."
                  : val.post_text}
              </p>

              <button
                className="liked btn"
                onClick={() => {
                  likedPost(val.id);
                }}
              >
                Like
              </button>
              <div className="bottom">
                <h4> {val.user_name}:</h4>
                <h4> {val.likes}</h4>
              </div>
              <button
                className="delete btn"
                onClick={() => {
                  deletedPost(val.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
