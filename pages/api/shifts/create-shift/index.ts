import type { NextApiRequest, NextApiResponse } from 'next/types'
import poolCoreV1 from 'pages/api/postgresql';

export default function createShift  (req: NextApiRequest, res: NextApiResponse) {
  const { description } = req.body;

  const query = {
    text: 'INSERT INTO shifts(description) VALUES($1) RETURNING *',
    values:[ description ],
  };
  
  poolCoreV1.query(
    query
  ).then((results)=>{
    const { rowCount, rows } = results;

    return res.status(200).json({
      success: true,
      shifts: { rowCount,rows },
    });
  }).catch((error)=>{
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error,
    });
  });
};