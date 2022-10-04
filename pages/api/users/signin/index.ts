import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';
import { Account } from '@prisma/client';

import { sign } from 'jsonwebtoken';

import { compare } from 'bcrypt';

interface RequestBodyCreatePost {
    email: Account['email'];
    password: Account['password'];
}

interface OverrideNextApiRequest extends Omit<NextApiRequest, 'body'> {
    body: RequestBodyCreatePost;
}

export default async function createPosts(
    req: OverrideNextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Fail: Incorrect method! Should be POST method'
        });
    }

    const { email, password } = req.body;

    try {
        const user = await prismaClientV1.account.findUnique({
            where: {
                email
            },
            include: {
                user: true
            }
        });

        const validPassword = await compare(password, user.password);
        if (!validPassword) {
            throw new Error('Wrong password');
        }

        const token = await sign(
            {
                email
            },
            process.env.SECRET || 'secret'
        );

        return res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });
    }
}
