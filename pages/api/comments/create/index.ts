import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { content, userId, postId } = req.body;

    prismaClientV1.comment
        .create({
            data: {
                content,
                user: {
                    connect: {
                        user_id: userId
                    }
                },
                post: {
                    connect: {
                        post_id: postId
                    }
                }
            },
            include: {
                user: {
                    include: {
                        account: true
                    }
                },
                post: true
            }
        })
        .then((results) => {
            return res.status(200).json({
                success: true,
                comment: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                success: false,
                error: error
            });
        });
}
