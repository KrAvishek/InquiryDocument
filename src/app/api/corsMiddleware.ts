// Using cors bcz of server issues

import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export const corsMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*', // Update this to specify the allowed origin(s)
    optionsSuccessStatus: 200,
  });

  next();
};
