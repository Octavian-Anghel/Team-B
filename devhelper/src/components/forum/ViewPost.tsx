import React, { useState, useEffect } from "react";

// Define the structure of the props and state
interface Post {
  id: number;
  title: string;
  content: string;
  userName: string;
  votes: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
}

interface ViewPostProps {
  post: Post;
  onWritePostClick: () => void;
}

const ViewPost = ({ post, onWritePostClick }: ViewPostProps) => {
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Assuming you want to add a new comment to the local state
    const updatedComments = [
      ...comments,
      { id: Date.now(), content: newComment },
    ];
    setComments(updatedComments);
    setNewComment("");
  };

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
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
      <div className="comments-section">
        {comments.map((comment) => (
          <div key={comment.id}>{comment.content}</div>
        ))}
      </div>
      <div className="post-comment-box">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={handleNewCommentChange}
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
      <button onClick={onWritePostClick}>Write Post</button>
    </div>
  );
};

export default ViewPost;
