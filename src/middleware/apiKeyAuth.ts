import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY;

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
  next();
};
