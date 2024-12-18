import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = React.useContext(AuthContext);

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
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    
    axios
      .post(
        `http://localhost:4000/comments`,
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
        setComments([...comments, { commentBody: newComment, username: response.data.username }]);
        setNewComment("");
      })
      .catch((error) => {
        console.log(error);
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
                        .delete(
                          `http://localhost:4000/comments/${comment.id}`,
                          {
                            headers: {
                              authorization: localStorage.getItem("token"),
                            },
                          }
                        )
                        .then(() => {
                          setComments(
                            comments.filter((c) => c.id !== comment.id)
                          );
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Delete
                  </button>)}
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
