declare namespace Express {
  interface Request {
    authorizationToken?: string;
    user?: {
      id: number;
      username: string;
    };
  }
}
