import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

import { RequestBodyCreatePost } from 'utils/types';

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

  const createTimeWorking = timeWorking?.length
    ? timeWorking.map((content) => ({
        content
      }))
    : null;

  const createWorkLocations = workLocations?.length
    ? workLocations.map((content) => ({
        content
      }))
    : null;

  const createSalaryInformation = salaryInformation?.length
    ? salaryInformation.map((content) => ({
        content
      }))
    : null;

  const createHashtags = hashtags?.length
    ? hashtags.map((content) => {
        return {
          hashtag: {
            create: {
              content
            }
          }
        };
      })
    : null;

  prismaClientV1.posts
    .create({
      data: {
        description: description || '',
        job_name: jobName,
        job_requirement: jobRequirement || '',
        quantity: quantity || 1,
        status: status || 'OPEN',
        user: {
          connect: {
            user_id: userId || 1
          }
        },
        time_working: {
          create: createTimeWorking || []
        },
        work_locations: {
          create: createWorkLocations || []
        },
        salary_information: {
          create: createSalaryInformation || []
        },
        postAndHashtag: {
          create: createHashtags || []
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
