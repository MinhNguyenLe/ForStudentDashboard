import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';
import { Account, Profile } from '@prisma/client';

import { hash } from 'bcrypt';

interface RequestBodyCreatePost {
    email: Account['email'];
    password: Account['password'];
    permission: Profile['permission'];
    username: Profile['username'];
}

interface OverrideNextApiRequest extends Omit<NextApiRequest, 'body'> {
    body: RequestBodyCreatePost;
}

export default async function createAccounts(
    req: OverrideNextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { email, password, permission, username } = req.body;

    const hashedPassword = await hash(password, 10);

    prismaClientV1.user
        .create({
            data: {
                account: {
                    create: {
                        email,
                        password: hashedPassword
                    }
                },
                profile: {
                    create: {
                        permission,
                        username
                    }
                }
            },
            include: {
                account: true
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
