import React, { useState } from "react";
import ViewPost from "./ViewPost";
import WritePost from "./WritePost";
import { Post } from "./Types";
import { useHistory } from "react-router-dom";

const ForumFrontEnd = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [view, setView] = useState<"VIEW" | "WRITE">("VIEW");
  const history = useHistory();

  const handlePostSubmitted = (newPost: Post) => {
    setPosts((currentPosts) => [...currentPosts, newPost]);
    setView("VIEW"); // Switch back to viewing posts
  };

  const handleWritePostClick = () => {
    setView("WRITE"); // Switch to writing a new post
  };
  const handleRefresh = () => {
    setTimeout(() => {
      history.push('/homepage');
      window.location.reload();
    }, 500);
  };

  return (
    <div>
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
      <div>
        <button className="App-button" onClick={handleRefresh}>Back to Homepage</button>
      </div>
    </div>
  );
  
};

export default ForumFrontEnd;
