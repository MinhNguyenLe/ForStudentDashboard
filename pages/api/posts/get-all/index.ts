import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function getPosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be GET method'
        });
    }

    prismaClientV1.posts
        .findMany({
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
            },
            orderBy: [{ created_at: 'desc' }]
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
