import { getUsers, getUser, addUser, updateUser } from "../Model/UserModel.js";

export default {
    GET_ALL_USERS: async (req, res) => {
        try {
            res.send(await getUsers());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    GET_A_USER: async (req, res) => {
        try { 
            res.send(await getUser(+req.params.id));
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    ADD_USER: async (req, res) => {
        try {
            const { user_email, user_password, user_name, user_surname } = req.body;
            await addUser(user_email, user_password, user_name, user_surname);
            res.send(await getUsers());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    UPDATE_USER: async (req, res) => {
        try {
            const [user] = getUser(+req.params.id);
            const { user_email, user_password, user_name, user_surname } = req.body;
            user_email ? user_email : { user_email } = user;
            user_password ? user_password : { user_password } = user;
            user_name ? user_name : { user_name } = user;
            user_surname ? user_surname : { user_surname } = user;
            
            await updateUser(ser_email, user_password, user_name, user_surname, +req.params.id);
            res.send(await getUsers());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    }
}