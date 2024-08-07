import { Router } from "express";
import controller from '../Controller/UserController.js'

const router = Router();

router.route('/')
    .get(controller.GET_ALL_USERS)
    .post(controller.ADD_USER)

router.route('/:id')
    .get(controller.GET_A_USER)
    .patch(controller.UPDATE_USER)
    .delete(controller.DELETE_USER)

export default router;