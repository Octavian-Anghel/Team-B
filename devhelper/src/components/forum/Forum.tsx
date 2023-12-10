import express, { Request, Response } from "express";

const app = express();
//const port = 3000;

app.use(express.json());

// interface creation

interface Post {
  id: number;
  title: string;
  content: string;
  votes: number;
}

interface Comment {
  id: number;
  postId: number;
  content: string;
}

let posts: Post[] = [];
let comments: Comment[] = [];
let currentPostId = 1;
let currentCommentId = 1;

// write topic
app.post("/api/topics", (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send("Invalid data");
  }

  const newPost: Post = { id: currentPostId++, title, content, votes: 0 };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// comments
app.post("/api/posts/:postId/comments", (req: Request, res: Response) => {
  const { content } = req.body;
  const { postId } = req.params;

  if (!content) {
    return res.status(400).send("Invalid content");
  }

  const postExists = posts.some((post) => post.id === parseInt(postId));
  if (!postExists) {
    return res.status(404).send("Post not found");
  }

  const newComment: Comment = {
    id: currentCommentId++,
    postId: parseInt(postId),
    content,
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Upvoting posts
app.post("/api/posts/:postId/upvote", (req: Request, res: Response) => {
  const { postId } = req.params;

  const post = posts.find((p) => p.id === parseInt(postId));
  if (!post) {
    return res.status(404).send("Post not found");
  }

  post.votes++;
  res.status(200).json(post);
});

// Downvoting posts
app.post("/api/posts/:postId/downvote", (req: Request, res: Response) => {
  const { postId } = req.params;

  const post = posts.find((p) => p.id === parseInt(postId));
  if (!post) {
    return res.status(404).send("Post not found");
  }

  post.votes--;
  res.status(200).json(post);
});
