import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

import { Post } from '@prisma/client';

interface RequestBodyCreatePost {
    description: Posts['description'];
    salary: Posts['salary'];
    locationIds: Array<PostsAndLocations['locationId']>;
    shiftIds: Array<PostsAndShifts['shiftId']>;
}

interface OverrideNextApiRequest extends Omit<NextApiRequest, 'body'> {
    body: RequestBodyCreatePost;
}

export default function createPosts(
    req: OverrideNextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { description, salary, locationIds, shiftIds } = req.body;

    const formatLocations = locationIds.map((locationId) => ({
        location: {
            connect: {
                id: locationId
            }
        }
    }));

    const formatShifts = shiftIds.map((shiftId) => ({
        location: {
            connect: {
                id: shiftId
            }
        }
    }));

    prismaClientV1.post
        .create({
            data: {
                description,
                salary,
                locations: {
                    create: formatLocations
                },
                shifts: {
                    create: formatShifts
                }
            },
            include: {
                locations: true,
                shifts: true
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
