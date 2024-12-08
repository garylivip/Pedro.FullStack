import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

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
            <div className="body">{post.postText}</div>
            <div className="footer">{post.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home
