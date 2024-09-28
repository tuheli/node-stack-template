import { Router } from "express";
import bcypt from "bcrypt";
import { createUser, getUserByUsername } from "../database/queries/userQueries";
import { isString } from "../common/common";

interface SignUpRequest {
  username: string;
  password: string;
}

const toSignupRequest = (body: unknown): SignUpRequest => {
  if (!body || typeof body !== "object") {
    throw new Error("Body is missing or its not an object.");
  }

  if (!("username" in body)) {
    throw new Error("Username is missing.");
  }

  if (!body.username || !isString(body.username)) {
    throw new Error("Username is invalid.");
  }

  if (!("password" in body)) {
    throw new Error("Password is missing.");
  }

  if (!body.password || !isString(body.password)) {
    throw new Error("Password is invalid.");
  }

  return {
    username: body.username,
    password: body.password,
  };
};

const router = Router();
const saltRounds = 10;

router.post("/", async (req, res) => {
  let username: string = "";
  let password: string = "";

  try {
    const signUpData = toSignupRequest(req.body);
    username = signUpData.username;
    password = signUpData.password;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: "Error creating user." });
    }
  }

  try {
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "Username is already in use." });
    }

    const passwordHash = await bcypt.hash(password, saltRounds);
    const user = await createUser({ username, passwordHash });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error creating user." });
  }
});

export default router;
