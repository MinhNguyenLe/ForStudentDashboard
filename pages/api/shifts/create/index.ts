import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function createShift(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { description, postId } = req.body;

    prismaClientV1.shifts
        .create({
            data: {
                name: description,
                posts: {
                    create: [
                        {
                            post: {
                                connect: {
                                    id: postId
                                }
                            }
                        }
                    ]
                }
            },
            include: {
                posts: true
            }
        })
        .then((results) => {
            return res.status(200).json({
                success: true,
                shifts: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                success: false,
                error: error
            });
        });
}
