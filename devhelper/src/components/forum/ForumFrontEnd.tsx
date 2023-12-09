import React, { useState } from "react";
import ViewPost from "./ViewPost";
import WritePost from "./WritePost";
import { Post } from "./Types";

const ForumFrontEnd = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [view, setView] = useState<"VIEW" | "WRITE">("VIEW");

  const handlePostSubmitted = (newPost: Post) => {
    setPosts((currentPosts) => [...currentPosts, newPost]);
    setView("VIEW");
  };

  const handleUpvote = (postId: number) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId ? { ...post, votes: post.votes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId: number) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId ? { ...post, votes: post.votes - 1 } : post
      )
    );
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
              onUpvote={() => handleUpvote(post.id)}
              onDownvote={() => handleDownvote(post.id)}
            />
          ))}
          <button onClick={() => setView("WRITE")}>Create New Post</button>
        </>
      )}
      {view === "WRITE" && <WritePost onPostSubmitted={handlePostSubmitted} />}
    </div>
  );
};

export default ForumFrontEnd;
