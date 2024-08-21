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
            const { complaint, description, urgency,user_id,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status } = req.body;
            const { user} = req.query
            await addComplaint(complaint, description, urgency,user,ID,first_work,devices,platforms,last_day,return_device,fullname,assignment,status);
            res.send(await getComplaints());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    UPDATE_COMPLAINT: async (req, res) => {
        try {
            const [complaints] = getComplaint(+req.params.id);
            const { complaint, description, urgency,ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status } = req.body;
            
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
    
            await updateComplaint(complaint, description, urgency, user_id, ID, first_work, devices, platforms, last_day, return_device, fullname,assignment,status, +req.params.id);
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
    }
}