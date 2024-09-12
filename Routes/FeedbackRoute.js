import { Router } from "express";
import controller from '../Controller/FeedbackCon.js'

const router = Router();

router.route('/')
    .get(controller.GET_ALL_COMPLAINTS)
    .post(controller.ADD_COMPLAINT)

router.route('/history')
    .get(controller.GET_HISTORY)    
    

router.route('/:id')
    .get(controller.GET_A_COMPLAINT)
    .patch(controller.UPDATE_COMPLAINT)
    .delete(controller.DELETE_COMPLAINTS) 

router.route('/post/:id')
    .post(controller.RESOLVE_COMPLAINTS) 


export default router;