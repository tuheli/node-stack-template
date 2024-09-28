import { Router } from "express";
import bcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { isString } from "../common/common";
import { getUserForSignIn, User } from "../database/queries/userQueries";

interface SignInRequest {
  username: string;
  password: string;
}

const toSignInRequest = (body: unknown): SignInRequest => {
  if (typeof body !== "object" || body === null) {
    throw new Error("Invalid body.");
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

router.post("/", async (req, res) => {
  let username: string = "";
  let password: string = "";

  try {
    const signInRequest = toSignInRequest(req.body);
    username = signInRequest.username;
    password = signInRequest.password;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: "Error signin in." });
    }
  }

  try {
    const user = await getUserForSignIn(username);
    if (!user) {
      return res.status(400).json({ message: "Username is not in use." });
    }

    const isPasswordCorrect = await bcypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Password is incorrect." });
    }

    const userForJwtSign: Omit<User, "passwordHash"> = {
      id: user.id,
      username,
    };

    const token = jwt.sign(userForJwtSign, jwtSecret!);
    return res.status(200).json({
      user: {
        username: user.username,
        authorizationToken: token,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error signing in." });
  }
});

export default router;
