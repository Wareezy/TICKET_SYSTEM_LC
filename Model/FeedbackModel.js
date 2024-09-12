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


export const addComplaint = async (complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status,official_title) => {
    const [ insertedComplaint ] = await pool.query(`
        INSERT INTO ticket_table (complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status,official_title) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)
    `,[complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status,official_title]);

    return insertedComplaint.insertId;
}
export const updateComplaint = async (complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status,official_title, ticket_id) => {
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
            status =?,
            official_title=?
        WHERE 
            ticket_id = ?
    `, [complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status, official_title,ticket_id]);
    
    return result;
};



export const deleteComplaint = async(ticket_id) => {
    const [ Delete_complaint ] = await pool.query(`
        DELETE FROM ticket_table WHERE ticket_id = ?
    `, [ticket_id])
};

export const history = async (ticket_id) => {
    try {
      const [insertedHistory] = await pool.query(`
        INSERT INTO history_table (complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname, assignment, status, official_title)
        SELECT complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname, assignment, status, official_title
        FROM ticket_table
        WHERE ticket_id = ?
      `, [ticket_id]);
  
      return insertedHistory.insertId;
    } catch (error) {
      console.error("Error inserting into history_table:", error);
      throw error;
    }
  };

  export const  getHistory = async () => {
    const [ history ] = await pool.query(`
        SELECT * FROM history_table
    `);
    console.log(history);
    return history;
  };
  