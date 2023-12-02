import { render, screen } from "@testing-library/react";
import app from "../devhelper";
import { expect, jest, test } from "@jest/globals";
import request from "supertest";

// posting new topics
describe("Post Topic", () => {
  it("should create a new topic when provided valid data", async () => {
    const response = await request(app)
      .post("/api/topics")
      .send({ title: "New Topic", content: "This is a new topic" })
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("New Topic");
  });

  it("should return an error for invalid data", async () => {
    const response = await request(app)
      .post("/api/topics")
      .send({ title: "", content: "" })
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(400);
  });
});

// commenting on posts
describe("Comment on Post", () => {
  it("should allow a user to comment on a post", async () => {
    const response = await request(app)
      .post("/api/posts/1/comments")
      .send({ content: "This is a comment" })
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.content).toBe("This is a comment");
  });

  it("should not allow empty comments", async () => {
    const response = await request(app)
      .post("/api/posts/1/comments")
      .send({ content: "" })
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(400);
  });
});

// upvoting/downvoting posts
describe("Upvote and Downvote Post", () => {
  it("should increase the vote count when upvoted", async () => {
    const response = await request(app)
      .post("/api/posts/1/upvote")
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.body.votes).toBeGreaterThan(0);
  });

  it("should decrease the vote count when downvoted", async () => {
    const response = await request(app)
      .post("/api/posts/1/downvote")
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.body.votes).toBeLessThan(0);
  });
});
