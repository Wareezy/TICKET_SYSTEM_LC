import mysql from 'mysql2';
import 'dotenv/config';
config()

export const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
}).promise()


export{pool}