import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function getPostById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Fail: Incorrect method! Should be GET method'
    });
  }

  const { id } = req.query;

  if (!id) {
    res.status(405).json({
      message: 'Fail: Please input post id'
    });
  }

  const post_id: string = Array.isArray(id) ? id[0] : id;

  prismaClientV1.posts
    .findUnique({
      where: {
        post_id: parseInt(post_id)
      },
      include: {
        time_working: true,
        salary_information: true,
        work_locations: true,
        user: {
          include: {
            account: true
          }
        },
        postAndHashtag: {
          include: {
            hashtag: true
          }
        }
      }
    })
    .then((results) => {
      return res.status(200).json({
        success: true,
        posts: results
      });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        error: error
      });
    });
}
