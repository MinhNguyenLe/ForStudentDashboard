import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function createLocations(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { name, postId } = req.body;

    prismaClientV1.locations
        .create({
            data: {
                name: name,
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
