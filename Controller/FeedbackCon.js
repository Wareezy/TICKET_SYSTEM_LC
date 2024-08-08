import { getComplaints, getComplaint, addComplaint, updateComplaint, deleteComplaint } from "../Model/FeedbackModel.js"

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
            const { complaint, description, ticket, urgency,user_id } = req.body;
            const { user} = req.query
            await addComplaint(complaint, description, ticket, urgency, user);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    UPDATE_COMPLAINT: async (req, res) => {
        try {
            const [complaints] = getComplaint(+req.params.id);
            const { complaint, description, ticket, urgency } = req.body;
            complaint ? complaint : { complaint } = complaints;
            description ? description : { description } = complaints;
            ticket ? ticket : { ticket } = complaints;
            urgency ? urgency : { urgency } = complaints;
            
            await updateComplaint(complaint, description, ticket, urgency, +req.params.id);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    DELETE_COMPLAINTS: async (req, res) => {
        try {
            await deleteComplaint(+req.params.id);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    }
}