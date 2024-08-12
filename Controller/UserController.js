import { getUsers, getUser, addUser, updateUser, deleteUser, checkUser } from "../Model/UserModel.js";

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
            const { user_email, user_password, user_name, user_surname,user_role } = req.body;
            await addUser(user_email, user_password, user_name, user_surname, user_role);
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
            user_role ? user_role : { user_role } = user;
            
            await updateUser(user_email, user_password, user_name, user_surname, user_role, +req.params.id);
            res.send(await getUsers());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    DELETE_USER: async (req, res) => {
        try {
            await deleteUser(+req.params.id);
            res.send(await getUsers());
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 });
        }
    },
    loginUser: async (req,res)=>{
        try{
            const {email,password}=req.body;
            await checkUser(email,password);

        }catch (error){
            res.status(500).send({error:error.message
            });
        }
    }
}