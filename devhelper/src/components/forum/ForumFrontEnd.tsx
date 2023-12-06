import React, { useState } from "react";
import ViewPost from "./ViewPost";
import WritePost from "./WritePost";
import { Post, Comment } from "./Types";

const ForumFrontEnd = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [view, setView] = useState<"VIEW" | "WRITE">("VIEW");

  const handlePostSubmitted = (newPost: Post) => {
    setPosts((currentPosts) => [...currentPosts, newPost]);
    setView("VIEW"); // Switch back to viewing posts
  };

  const handleWritePostClick = () => {
    setView("WRITE"); // Switch to writing a new post
  };

  return (
    <div>
      <h1>Forum</h1>
      {view === "VIEW" && (
        <>
          {posts.map((post) => (
            <ViewPost
              key={post.id}
              post={post}
              onWritePostClick={handleWritePostClick}
            />
          ))}
          <button onClick={handleWritePostClick}>Create New Post</button>
        </>
      )}
      {view === "WRITE" && <WritePost onPostSubmitted={handlePostSubmitted} />}
    </div>
  );
};

export default ForumFrontEnd;
