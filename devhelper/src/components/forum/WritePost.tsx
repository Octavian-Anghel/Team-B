import React, { useState } from "react";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // Implement the logic to submit the new post
    console.log(title, content);
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
