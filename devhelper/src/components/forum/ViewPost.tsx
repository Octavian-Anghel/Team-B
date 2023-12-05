import React from "react";
import { Post } from "./Types";

interface ViewPostProps {
  post: Post;
  onWritePostClick: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({ post, onWritePostClick }) => {
  // Render the post and its comments
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">
          <span>{post.userName}</span>
        </div>
        <h1>{post.title}</h1>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        {/* Post actions like upvote and downvote would go here */}
      </div>
      <div className="comments-section">
        {post.comments.map((comment) => (
          <div key={comment.id}>{comment.content}</div>
        ))}
      </div>
      <button onClick={onWritePostClick}>Reply</button>
    </div>
  );
};

export default ViewPost;
