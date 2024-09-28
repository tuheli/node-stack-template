import { Client } from "pg";
import { databaseUrl } from "../config";
import fs from "fs";
import path from "path";

const relativeCertificatePath =
  process.env.NODE_ENV === "production"
    ? "../../../eu-north-1-bundle.pem"
    : "../../eu-north-1-bundle.pem";
const absoluteCertificatePath = path.join(__dirname, relativeCertificatePath);

const client = new Client({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync(absoluteCertificatePath).toString(),
  },
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
    await client.end();
    process.exit(1);
  }
};

export { client, connectToDatabase };
