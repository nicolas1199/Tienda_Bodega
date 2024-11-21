import {
  DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from './configEnv.js';
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  user: DB_USERNAME,
  database: DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
