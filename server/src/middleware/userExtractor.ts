import { NextFunction, Request, Response } from "express";
import { jwtSecret } from "../config";
import jwt from "jsonwebtoken";
import { getUserByUsername } from "../database/queries/userQueries";

export const userExtractor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.get("Authorization");
    if (authorization && authorization.startsWith("Bearer ")) {
      req.authorizationToken = authorization.replace("Bearer ", "");
    }

    if (!req.authorizationToken) {
      return res
        .status(401)
        .json({ error: "Authorization token is missing. Please sign in." });
    }

    const decodedToken = jwt.verify(req.authorizationToken, jwtSecret!, {
      maxAge: "24h",
    }) as jwt.JwtPayload;

    if (!decodedToken.id) {
      return res
        .status(401)
        .json({ message: "Authorization token is invalid. Please sign in" });
    }

    const user = await getUserByUsername(decodedToken.username);
    if (!user) {
      return res.status(401).json({
        message: "User not found. Please sign in.",
      });
    }

    req.user = {
      id: user.id,
      username: user.username,
    };
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ message: "Authorization token is malformed. Please sign in." });
    }

    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Auhorization token is expired. Please sign in." });
    }

    if (error instanceof jwt.NotBeforeError) {
      return res.status(500).json({ message: "Something went wrong." });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};
