import { Router } from "express";
import controller from '../Controller/UserController.js'

const router = Router()


router.route('/')
    .get(controller.GET_ALL_USERS)


export default router