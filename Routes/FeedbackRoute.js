import { Router } from "express";
import controller from '../Controller/FeedbackCon.js'

const router = Router();

router.route('/')
    .get(controller.GET_ALL_COMPLAINTS)
    .post(controller.ADD_COMPLAINT)

router.route('/:id')
    .get(controller.GET_A_COMPLAINT)
    .patch(controller.UPDATE_COMPLAINT)
    .delete(controller.DELETE_COMPLAINTS) 

export default router;