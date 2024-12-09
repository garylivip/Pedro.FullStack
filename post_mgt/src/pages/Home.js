import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((response) => {
        // console.log(response.data);
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
