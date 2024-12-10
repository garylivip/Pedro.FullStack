import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/byId/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Error");
      });
    axios
      .get(`http://localhost:4000/comments/${id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [id]);

  const addComment = () => {
    axios
      .post(`http://localhost:4000/comments`, {
        commentBody: newComment,
        PostId: id,
      })
      .then((response) => { 
        setComments([...comments, { commentBody: newComment }]);
        setNewComment("");
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.userName}</div>{" "}
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
