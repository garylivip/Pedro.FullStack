import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "http://101.132.187.152:4000";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = React.useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${baseURL}/posts/byId/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    axios
      .get(`${baseURL}/comments/${id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  const addComment = () => {
    axios
      .post(
        `${baseURL}/comments`,
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setComments([
          ...comments,
          { commentBody: newComment, username: response.data.username },
        ]);
        setNewComment("");
      })
      .catch((error) => {
        console.log("Error", error);
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
                <div className="commentFooter">
                  <span>{comment.username}</span>
                  {authState.username === comment.username && (
                    <button
                      onClick={() => {
                        axios
                          .delete(`${baseURL}/comments/${comment.id}`, {
                            headers: {
                              authorization: localStorage.getItem("token"),
                            },
                          })
                          .then(() => {
                            setComments(
                              comments.filter((c) => c.id !== comment.id)
                            );
                          })
                          .catch((error) => {
                            console.log("Error", error);
                          });
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
