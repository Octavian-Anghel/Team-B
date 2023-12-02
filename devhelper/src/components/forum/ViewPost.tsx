const ViewPost = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">
          {/* Replace with user avatar and name */}
          <img src="path-to-avatar.jpg" alt="User Avatar" />
          <span>UserName</span>
        </div>
        <h1>Post Title</h1>
      </div>
      <div className="post-content">
        {/* Replace with actual post content */}
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="post-actions">
        {/* Replace with actual voting functionality */}
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
      <div className="comments-section">
        {/* Replace with a list of comments */}
        <div>Comment 1</div>
        <div>Comment 2</div>
        {/* ... more comments */}
      </div>
      <div className="post-comment-box">
        <input type="text" placeholder="Write a comment..." />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ViewPost;
