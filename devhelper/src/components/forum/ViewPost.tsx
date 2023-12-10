import React from "react";
import { Post } from "./Types";

interface ViewPostProps {
  post: Post;
  onUpvote: () => void;
  onDownvote: () => void;
  onReply?: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({
  post,
  onUpvote,
  onDownvote,
  onReply,
}) => {
  return (
    <div className="post-container">
      <div className="post-title-box">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <div className="post-votes">Votes: {post.votes}</div>
      </div>
      <div className="post-actions">
        <button onClick={onUpvote} aria-label="upvote">
          {/* Upvote SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </button>
        <button onClick={onDownvote} aria-label="downvote">
          {/* Downvote SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>
        </button>
        <button onClick={onReply} className="reply-button">
          Reply
        </button>
      </div>
      <div className="comments-section">
        {post.comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPost;
