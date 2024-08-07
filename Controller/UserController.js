import { getUsers } from "../Model/UserModel.js";

export default {
    GET_ALL_USERS: async (req, res) => {
        try {
            res.send(await getUsers())
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 })
        }
    },
    GET_A_USER: async (req, res) => {
        try {
            
        } catch (error) {
            res.send({ error: error.message, serverRes: 500 })
        }
    }
}