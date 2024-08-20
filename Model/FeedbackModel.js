import { pool } from "../Config/config.js";

export const getComplaints = async () => {
    const [ complaints ] = await pool.query(`
        SELECT * FROM ticket_table
    `);
    console.log(complaints);
    return complaints;
};
export const getComplaint = async (ticket_id) => {
    const [ complaint ] = await pool.query(`
        SELECT * FROM ticket_table where ticket_id = ?
    `,[ticket_id]);
    console.log(complaint);
    return complaint;
};

export const addComplaint = async (complaint, description, ticket, urgency,user_id) => {
    const [ insertedComplaint ] = await pool.query(`
        INSERT INTO ticket_table (complaint, description, ticket, urgency,user_id) VALUES (?, ?, ?, ?,?)
    `,[complaint, description, ticket, urgency,user_id]);

    return insertedComplaint.insertId;
}

export const updateComplaint = async (complaint, description, ticket, urgency,ticket_id) => {
    const [ Update_complaint ] = await pool.query(`
        UPDATE ticket_table SET complaint = ?, description = ?, ticket = ?, urgency = ? WHERE ticket_id = ?
    `, [complaint, description, ticket, urgency, ticket_id]);
}

export const deleteComplaint = async(ticket_id) => {
    const [ Delete_complaint ] = await pool.query(`
        DELETE FROM ticket_table WHERE ticket_id = ?
    `, [ticket_id])
}