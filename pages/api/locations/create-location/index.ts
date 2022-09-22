import type { NextApiRequest, NextApiResponse } from 'next/types'
import poolCoreV1 from 'pages/api/postgresql';

export default function createLocations  (req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  const query = {
    text: 'INSERT INTO locations(name) VALUES($1) RETURNING *',
    values:[ name ],
  };
  
  poolCoreV1.query(
    query
  ).then((results)=>{
    const { rowCount, rows } = results;

    return res.status(200).json({
      success: true,
      locations: { rowCount,rows },
    });
  }).catch((error)=>{
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error,
    });
  });
};