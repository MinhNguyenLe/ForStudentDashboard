import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

import {
    Posts,
    StatusPost,
    TimeWorking,
    SalaryInformation,
    WorkLocation,
    User,
    Hashtag
    // Contact
} from '@prisma/client';

interface RequestBodyCreatePost {
    description: Posts['description'];
    jobName: Posts['job_name'];
    jobRequirement?: Posts['job_requirement'];
    quantity?: Posts['quantity'];
    status: StatusPost;
    timeWorking: Array<TimeWorking['content']>;
    salaryInformation: Array<SalaryInformation['content']>;
    workLocations: Array<WorkLocation['content']>;
    hashtags: Array<Hashtag['content']>;
    userId: User['user_id'];
    // contact: Array<Contact['content']>;
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

    const {
        description,
        jobName,
        jobRequirement,
        quantity,
        status,
        timeWorking,
        salaryInformation,
        workLocations,
        hashtags,
        userId
        // contact
    } = req.body;

    const createTimeWorking = timeWorking.map((content) => ({
        content
    }));

    const createWorkLocations = workLocations.map((content) => ({
        content
    }));

    const createSalaryInformation = salaryInformation.map((content) => ({
        content
    }));

    const createHashtags = hashtags.map((content) => {
        return {
            hashtag: {
                create: {
                    content
                }
            }
        };
    });

    prismaClientV1.posts
        .create({
            data: {
                description,
                job_name: jobName,
                job_requirement: jobRequirement,
                quantity,
                status,
                user: {
                    connect: {
                        user_id: userId
                    }
                },
                time_working: {
                    create: createTimeWorking
                },
                work_locations: {
                    create: createWorkLocations
                },
                salary_information: {
                    create: createSalaryInformation
                },
                postAndHashtag: {
                    create: createHashtags
                }
            },
            include: {
                time_working: true,
                salary_information: true,
                work_locations: true,
                postAndHashtag: true
                // user:{
                //     include:{
                //         account:true
                //     }
                // }
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
