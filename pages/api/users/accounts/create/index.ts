import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';
import { Account } from '@prisma/client';

interface RequestBodyCreatePost {
    email: Account['email'];
    password: Account['password'];
}

interface OverrideNextApiRequest extends Omit<NextApiRequest, 'body'> {
    body: RequestBodyCreatePost;
}

export default function createAccounts(
    req: OverrideNextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { email, password } = req.body;

    console.log(email)

    prismaClientV1.user
        .create({
            data: {
                account: {
                    create: {
                        email,
                        password
                    }
                }
            },
            include:{
                account:true
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
