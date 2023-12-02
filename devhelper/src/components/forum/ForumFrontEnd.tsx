import React from "react";
import ViewPost from "./ViewPost";
import WritePost from "./WritePost";

const ForumFrontEnd = () => {
  return (
    <div>
      <h1>Forum</h1>
      <ViewPost />
      <button>Create New Post</button>
    </div>
  );
};

export default ForumFrontEnd;
