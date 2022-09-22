import { toNumber } from 'lodash';
import { Pool } from 'pg';

const poolConfigDefault = {
  user: process.env.DB_USER || 'minhlee',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  port: toNumber(process.env.DB_PORT) || 5432,
};

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

export const poolAccount = new Pool({
  ...poolConfigDefault,
  database: process.env.DB_AUTH || 'db_auth',
  // connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  // ssl: isProduction
});

const poolCoreV1 = new Pool({
  ...poolConfigDefault,
  database: process.env.DB_CORE || 'core_v3',
  // connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  // ssl: isProduction
});

console.log(`DB connecting at ${process.env.DB_CORE || 'core_v3'}`);

export default poolCoreV1;
