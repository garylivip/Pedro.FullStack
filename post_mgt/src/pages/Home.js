import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const baseURL =
process.env.NODE_ENV === "development"
  ? "http://localhost:4000"
  : "http://101.132.187.152:4000";
console.log("xxxxxxxxxxxxxxxxxxxxx", baseURL);


function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${baseURL}/posts`)
      .then((response) => {
      setPosts(response.data);
      })
      .catch((error) => {
      console.log(error);
      });
  }, []);

  return (
    <div>
      {posts.map((post, key) => {
        return (
          <div key={post.id} className="post">
            <div className="title">{post.title}</div>
            <div
              className="body"
              onClick={() => navigate(`/post/${post.id}`)} //onClick={() => (window.location.href = `/post/${post.id}`)}
            >
              {post.postText}
            </div>
            <div className="footer">{post.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
