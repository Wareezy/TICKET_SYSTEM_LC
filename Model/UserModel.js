import { pool } from "../Config/config.js";
import bcrypt from 'bcrypt'


export const getUsers = async () => {
    const [ users ] = await pool.query(`
        SELECT * FROM user_table
    `);
    console.log(users);
    return users;
};

export const getUser = async (id) => {
    const [ user ] = await pool.query(`
        SELECT * FROM user_table WHERE user_id = ?
    `, [id]);
    return user;
}

export const addUser = async (user_email, user_password, user_name, user_surname, user_role) => {
    const [ insertedUser ] = await pool.query(`
        INSERT INTO user_table (user_email, user_password, user_name, user_surname, user_role) VALUES (?, ?, ?, ?, ?)
    `,[user_email, user_password, user_name, user_surname, user_role]);

    return insertedUser.insertId;
}

export const updateUser = async (user_email, user_password, user_name, user_surname, user_id) => {
    const [ targeted_user ] = await pool.query(`
        UPDATE user_table SET user_email = ?, user_password = ?, user_name = ?, user_surname = ?, user_role = ? WHERE user_id = ?
    `, [user_email, user_password, user_name, user_surname, user_role, user_id]);
}

export const deleteUser = async(user_id) => {
    const [ user ] = await pool.query(`
        DELETE FROM user_table WHERE user_id = ?
    `, [user_id])
}


export const checkUser = async (user_email)=>{
const [[{user_password}]]=await pool.query(`
    SELECT user_password FROM user_table WHERE user_email = ?
    `,[user_email]);
    return user_password
}

export const getusername = async(user_email)=> {
    const [result] = await pool.query(`
    SELECT * FROM user_table WHERE user_email = ?
    `,[user_email])
    return result
}