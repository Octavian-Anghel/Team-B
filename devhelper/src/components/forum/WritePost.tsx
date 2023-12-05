import React, { useState } from "react";
import { Post } from "./Types";

interface WritePostProps {
  onPostSubmitted: (post: Post) => void;
}

const WritePost: React.FC<WritePostProps> = ({ onPostSubmitted }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      // Handle the error appropriately
      console.error("Title and content are required");
      return;
    }

    const newPost: Post = {
      id: Date.now(), // Mock ID
      title,
      content,
      userName: "UserName", // Placeholder for user name
      votes: 0,
      comments: [],
    };

    onPostSubmitted(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <div className="write-post-container">
      <div className="write-post-header">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something here..."
      />
      <div className="write-post-actions">
        <button onClick={() => setContent("")}>Undo</button>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default WritePost;
