import React, { useState } from "react";
import ViewPost from "./ViewPost";
import WritePost from "./WritePost";
import { Post } from "./Types";

const ForumFrontEnd = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [view, setView] = useState<"VIEW" | "WRITE" | "COMMENT">("VIEW");
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  const handlePostSubmitted = (newPost: Post) => {
    if (view === "COMMENT" && currentPostId !== null) {
      // Handle adding a new comment to a post
      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === currentPostId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { id: Date.now(), content: newPost.content },
                ],
              }
            : post
        )
      );
    } else {
      // Handle adding a new post
      setPosts((currentPosts) => [
        ...currentPosts,
        { ...newPost, comments: [] },
      ]);
    }
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

  const handleReplyClick = (postId: number) => {
    setCurrentPostId(postId);
    setView("COMMENT");
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
              onReply={() => handleReplyClick(post.id)}
            />
          ))}
          <button onClick={() => setView("WRITE")}>Create New Post</button>
        </>
      )}
      {(view === "WRITE" || view === "COMMENT") && (
        <WritePost onPostSubmitted={handlePostSubmitted} />
      )}
    </div>
  );
};

export default ForumFrontEnd;
