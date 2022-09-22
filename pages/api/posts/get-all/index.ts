import type { NextApiRequest, NextApiResponse } from 'next/types'
import poolCoreV1 from 'pages/api/postgresql';

export default function getPosts (req: NextApiRequest, res: NextApiResponse) {
  const query = {
    text: 'SELECT posts.*, locations.* locations, shifts.* shifts FROM posts JOIN locations ON posts.fk_location = locations._id JOIN shifts ON posts.fk_shift = shifts._id',
  };
  
  poolCoreV1.query(
    query
  ).then((results)=>{
    const { rowCount, rows } = results;

    return res.status(200).json({
      success: true,
      posts: { rowCount,rows },
    });
  }).catch((error)=>{
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error,
    });
  });
};
