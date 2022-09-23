import type { NextApiRequest, NextApiResponse } from 'next/types';
import prismaClientV1 from 'backend/prisma-client';

export default function createPosts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ message: 'Fail: Incorrect method! Should be POST method' });
  }

  const { description, price, locationIds, shiftIds } = req.body;

  const formatLocations = locationIds.forEach((locationId) => ({
    location: {
      connect: {
        id: locationId
      }
    }
  }));

  const formatShifts = shiftIds.forEach((shiftId) => ({
    location: {
      connect: {
        id: shiftId
      }
    }
  }));

  prismaClientV1.posts
    .create({
      data: {
        desc_job: description,
        price: price,
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
