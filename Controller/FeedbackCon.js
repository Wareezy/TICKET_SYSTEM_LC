import { getComplaints, getComplaint, addComplaint, updateComplaint, deleteComplaint, history, getHistory } from "../Model/FeedbackModel.js"

export default {
    GET_ALL_COMPLAINTS: async (req, res) => {
        try {
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    GET_A_COMPLAINT: async (req, res) => {
        try { 
            res.send(await getComplaint(+req.params.id));
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    ADD_COMPLAINT: async (req, res) => {
        try {
            const { complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status,official_title } = req.body;
            const { user} = req.query
            await addComplaint(complaint, description, urgency,user,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status,official_title);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    UPDATE_COMPLAINT: async (req, res) => {
        try {
            const [complaints] = getComplaint(+req.params.id);
            const { complaint, description, urgency,ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status,official_title } = req.body;
            
            complaint ? complaint : { complaint } = complaints;
            description ? description : { description } = complaints;
            urgency ? urgency : { urgency } = complaints;
            ID ? ID : { ID } = complaints;
            first_work ? first_work : { first_work } = complaints;
            devices ? devices : { devices } = complaints;
            platforms ? platforms : { platforms } = complaints;
            last_day ? last_day : { last_day } = complaints;
            return_device ? return_device : { return_device } = complaints;
            fullname ? fullname : { fullname } = complaints;
            assignment? assignment : { assignment } = complaints;
            status? status : { status } = complaints;
            official_title? official_title : { official_title } = complaints;
    
            await updateComplaint(complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status, official_title,+req.params.id);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    }
    ,
    DELETE_COMPLAINTS: async (req, res) => {
        try {
            await deleteComplaint(+req.params.id);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    RESOLVE_COMPLAINTS: async (req, res) => {
        try {
          const { id: ticket_id } = req.params; // Extract ticket_id from URL parameters
      
          if (!ticket_id) {
            return res.status(400).send({ error: 'ticket_id is required', serverRes: 400 });
          }
      
          const ticketIdNum = Number(ticket_id); // Convert ticket_id to a number
      
          // Call history function to add the ticket to history_table
          await history(ticketIdNum);
      
          // Fetch updated complaints list
          const complaints = await getComplaints();
          res.send(complaints);
        } catch (error) {
          res.status(500).send({ error: error.message, serverRes: 500 });
        }
      },
      
    GET_HISTORY: async (req, res) => {
        try {
            res.send(await getHistory());
        }
        catch (error) {
            res.status(500).send({ error: error.message, serverRes: 500 });
        }
    }
}