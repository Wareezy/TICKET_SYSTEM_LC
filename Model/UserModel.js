import { pool } from "../Config/config.js";

export const getUsers = async () => {
    const [ users ] = await pool.query(`
        SELECT * FROM user_table
    `);
    console.log(users);
    return users;
};

export const getUser = async (id) => {
    const [ user ] = await pool.query(`
        SELECT * FROM WHERE user_id = ?
    `, [id]);
    return user;
}

export const addUser = async (user_email, user_password, user_name, user_surname) => {
    const [ insertedUser ] = await pool.query(`
        INSERT INTO user_table (user_email, user_password, user_name, user_surname) VALUES (?, ?, ?, ?)
    `,[user_email, user_password, user_name, user_surname]);

    return insertedUser.insertId;
}

export const updateUser = async (user_email, user_password, user_name, user_surname, user_id) => {
    const [ targeted_user ] = await pool.query(`
        UPDATE user_table SET user_email = ?, user_password = ?, user_name = ?, user_surname = ? WHERE user_id = ?
    `, [user_email, user_password, user_name, user_surname, user_id]);
}