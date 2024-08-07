import { pool } from "../Config/config.js";

export const getUsers = async () => {
    const [ users ] = await pool.query(`
        SELECT * FROM user_table
    `);
    console.log(users);
    return users;
};