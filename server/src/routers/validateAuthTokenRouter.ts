import { Router } from "express";
import { userExtractor } from "../middleware/userExtractor";

// Used to check if a token stored on
// client side is still valid so the
// client side wouldn't use signed in
// routes with an invalid token.

const router = Router();

router.post("/", userExtractor, (req, res) => {
  try {
    if (!req.user || !req.authorizationToken) {
      return res
        .status(401)
        .json({ message: "Authorization token is invalid. Please sign in." });
    }

    return res.status(200).json({
      user: {
        username: req.user.username,
        authorizationToken: req.authorizationToken,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error validating authorization token." });
  }
});

export default router;
