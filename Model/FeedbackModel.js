import { pool } from '../Config/config.js'

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


export const addComplaint = async (complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status) => {
    const [ insertedComplaint ] = await pool.query(`
        INSERT INTO ticket_table (complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?)
    `,[complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status]);

    return insertedComplaint.insertId;
}
export const updateComplaint = async (complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status, ticket_id) => {
    const [result] = await pool.query(`
        UPDATE ticket_table
        SET 
            complaint = ?, 
            description = ?, 
            urgency = ?, 
            user_id = ?, 
            ID = ?, 
            first_work = ?, 
            devices = ?, 
            platforms = ?, 
            last_day = ?, 
            return_device = ?, 
            fullname = ?,
            assignment =?, 
            status =?
        WHERE 
            ticket_id = ?
    `, [complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status, ticket_id]);
    
    return result;
};



export const deleteComplaint = async(ticket_id) => {
    const [ Delete_complaint ] = await pool.query(`
        DELETE FROM ticket_table WHERE ticket_id = ?
    `, [ticket_id])
}