import express from 'express'
import controller from '../Controller/UserController.js'
import {auth} from '../middleware/authenticate.js'
const router= express.Router()

router
    .route('/')
        .post(controller.loginUser)


export default router;