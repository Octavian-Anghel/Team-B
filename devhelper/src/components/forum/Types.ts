export interface Comment {
  id: number;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userName: string;
  votes: number;
  comments: Comment[];
}
