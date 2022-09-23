import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function getLocations(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ message: 'Fail: Incorrect method! Should be GET method' });
  }

  prismaClientV1.locations
    .findMany({
      include: {
        posts: true
      }
    })
    .then((results) => {
      return res.status(200).json({
        success: true,
        locations: results
      });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        error: error
      });
    });
}
