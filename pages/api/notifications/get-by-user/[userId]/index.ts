import prismaClientV1 from 'backend/prisma-client';
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default function getByUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Fail: Incorrect method! Should be GET method'
    });
  }
  const { userId } = req.query;

  const user_id = Array.isArray(userId)
    ? parseInt(userId[0])
    : parseInt(userId);

  prismaClientV1.usersAndNotifications
    .findMany({
      where: {
        user_id
      },
      include: {
        notification: true
      },
      orderBy: {
        notification: {
          created_at: 'desc'
        }
      }
    })
    .then((results) => {
      return res.status(200).json({
        success: true,
        notifications: results
      });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        error: error
      });
    });
}
