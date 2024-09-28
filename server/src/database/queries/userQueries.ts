import { client } from "../database";

interface CreateUserParams {
  username: string;
  passwordHash: string;
}

export interface User {
  id: number;
  username: string;
  passwordHash: string;
}

export const createUser = async ({
  username,
  passwordHash,
}: CreateUserParams): Promise<Omit<User, "passwordHash">> => {
  try {
    await client.query("BEGIN");
    const query = {
      text: `INSERT INTO users (username, password_hash)
             VALUES ($1, $2)
             RETURNING id, username`,
      values: [username, passwordHash],
    };

    const { rows } = await client.query(query);
    await client.query("COMMIT");
    return {
      id: rows[0].id,
      username: rows[0].username,
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
};

export const getUserByUsername = async (
  username: string
): Promise<Omit<User, "passwordHash"> | null> => {
  try {
    const query = {
      text: `SELECT id, username FROM users WHERE username = $1`,
      values: [username],
    };

    const { rows } = await client.query(query);

    if (rows.length === 0) {
      return null;
    }

    return {
      id: rows[0].id,
      username: rows[0].username,
    };
  } catch (error) {
    throw error;
  }
};

export const getUserForSignIn = async (
  username: string
): Promise<User | null> => {
  try {
    const query = {
      text: `SELECT id, username, password_hash FROM users WHERE username = $1`,
      values: [username],
    };

    const { rows } = await client.query(query);

    if (rows.length === 0) {
      return null;
    }

    return {
      id: rows[0].id,
      username: rows[0].username,
      passwordHash: rows[0].password_hash,
    };
  } catch (error) {
    throw error;
  }
};
