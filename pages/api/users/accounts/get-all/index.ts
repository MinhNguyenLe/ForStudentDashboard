import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function getAccounts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be GET method'
        });
    }

    prismaClientV1.user
        .findMany({
            include: {
                account: true,
                posts: true
            }
        })
        .then((results) => {
            return res.status(200).json({
                success: true,
                user: results
            });
        })
        .catch((error) => {
            console.log(error);

            return res.status(500).json({
                success: false,
                error: error
            });
        });
}
