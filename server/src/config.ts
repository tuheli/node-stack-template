import "dotenv/config";

export const databaseUrl = process.env.DATABASE_URL;
export const jwtSecret = process.env.JWT_SECRET;

if (!databaseUrl) {
  throw new Error("Database url is missing from .env file.");
}

if (!jwtSecret) {
  throw new Error("Jwt secret is missing from .env file.");
}
