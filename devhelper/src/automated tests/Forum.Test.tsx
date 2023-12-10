import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ForumFrontEnd from "../components/forum/ForumFrontEnd";
import ViewPost from "../components/forum/ViewPost";
import WritePost from "../components/forum/WritePost";
import "@testing-library/jest-dom/extend-expect";

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post content",
    userName: "JohnDoe",
    votes: 0,
    comments: [{ id: 1, content: "First comment" }],
  },
];

describe("ForumFrontEnd Component", () => {
  it("renders without crashing", () => {
    render(<ForumFrontEnd />);
  });

  it('displays the "Create New Post" button', () => {
    render(<ForumFrontEnd />);
    expect(screen.getByText("Create New Post")).toBeInTheDocument();
  });

  it('switches to "Write Post" view when "Create New Post" is clicked', () => {
    render(<ForumFrontEnd />);
    fireEvent.click(screen.getByText("Create New Post"));
    expect(
      screen.getByPlaceholderText("Write something here...")
    ).toBeInTheDocument();
  });
});

describe("ViewPost Component", () => {
  it("renders a post", () => {
    render(
      <ViewPost
        post={mockPosts[0]}
        onUpvote={() => {}}
        onDownvote={() => {}}
        onReply={() => {}}
      />
    );
    expect(screen.getByText("First Post")).toBeInTheDocument();
    expect(
      screen.getByText("This is the first post content")
    ).toBeInTheDocument();
  });

  it("renders comments for a post", () => {
    render(
      <ViewPost
        post={mockPosts[0]}
        onUpvote={() => {}}
        onDownvote={() => {}}
        onReply={() => {}}
      />
    );
    expect(screen.getByText("First comment")).toBeInTheDocument();
  });
});

describe("WritePost Component", () => {
  it("allows a user to input title and content", () => {
    const onPostSubmitted = jest.fn();
    render(<WritePost onPostSubmitted={onPostSubmitted} />);

    fireEvent.change(screen.getByPlaceholderText("Post Title"), {
      target: { value: "New Title" },
    });
    fireEvent.change(screen.getByPlaceholderText("Write something here..."), {
      target: { value: "New Content" },
    });
    fireEvent.click(screen.getByText("Send"));

    expect(onPostSubmitted).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Title",
        content: "New Content",
      })
    );
  });
});
