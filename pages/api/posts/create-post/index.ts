import type { NextApiRequest, NextApiResponse } from 'next/types'
import poolCoreV1 from 'pages/api/postgresql';

export default function createPosts  (req: NextApiRequest, res: NextApiResponse) {
  const { description, price,locations } = req.body;

  const query = {
    text: 'INSERT INTO posts(description,price,fk_location) VALUES($1,$2,S3) RETURNING *',
    values:[ description, price,locations ]
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