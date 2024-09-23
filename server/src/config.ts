import "dotenv/config";

export const apiKeyExample = process.env.API_KEY_EXAMPLE;

if (!apiKeyExample) {
  throw new Error("Api key example is missing from .env file.");
}
