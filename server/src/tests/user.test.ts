// tests/user.test.ts
import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcryptjs";
import { app } from "../index";
import User from "../models/user.model";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // Start in-memory MongoDB instance for isolated testing
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  // Clean up database and disconnect
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  // Clear collections between tests to avoid state leak
  await User.deleteMany({});
});

describe("User Registration", () => {
  it("should register a new user with valid data", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({
        email: "test@example.com",
        username: "testuser",
        password: "password123",
        fullName: "Test User",
      });

    expect(res.statusCode).toBe(201);
    // Check that response contains the registered user data
    expect(res.body).toHaveProperty("user");
    expect(res.body.user.email).toBe("test@example.com");
  });

  it("should return an error for an invalid email", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({
        email: "invalid-email",
        username: "testuser",
        password: "password123",
        fullName: "Test User",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should return an error when required fields are missing", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({
        email: "missingfields@example.com",
        // username is optional, but missing password and fullName
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should not allow duplicate email registration", async () => {
    // First registration
    await request(app)
      .post("/api/users/register")
      .send({
        email: "duplicate@example.com",
        username: "uniqueuser1",
        password: "password123",
        fullName: "Duplicate User",
      });

    // Attempt to register again with the same email
    const res = await request(app)
      .post("/api/users/register")
      .send({
        email: "duplicate@example.com",
        username: "uniqueuser2",
        password: "password123",
        fullName: "Duplicate User",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});

describe("User Login", () => {
  beforeEach(async () => {
    // Create a test user in the database for login tests
    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = new User({
      email: "login@example.com",
      username: "loginuser",
      password: hashedPassword,
      fullName: "Login User",
    });
    await user.save();
  });

  it("should login successfully with correct credentials", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({
        email: "login@example.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    // Also verify that a token cookie is set (if your controller sets cookies)
    const cookies = res.headers["set-cookie"];
    expect(cookies).toBeDefined();
    expect(cookies[0]).toMatch(/token=/);
  });

  it("should fail login with an incorrect password", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({
        email: "login@example.com",
        password: "wrongpassword",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should fail login for a non-existent user", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({
        email: "nonexistent@example.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should return an error for missing credentials", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({
        // Missing both email and password
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
