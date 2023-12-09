// Assume that ViewPost.tsx is in the same directory

// ViewPost.tsx
import React from "react";
import { Post } from "./Types";

interface ViewPostProps {
  post: Post;
  onWritePostClick: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({ post, onWritePostClick }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">{/* User info here */}</div>
        {/* Post Title Box */}
        <div className="post-title-box">
          <h1>{post.title}</h1>
        </div>
      </div>
      {/* Post Content */}
      <div className="post-content-box">{post.content}</div>
      {/* Post Actions */}
      <div className="post-actions">{/* Voting actions */}</div>
      {/* Comments Section */}
      <div className="comments-section">
        {post.comments.map((comment) => (
          // Comment Box
          <div key={comment.id} className="comment-box">
            {comment.content}
          </div>
        ))}
      </div>
      {/* Write Post/Reply Button */}
      <button onClick={onWritePostClick}>Reply</button>
    </div>
  );
};

export default ViewPost;
