import { Router } from "express";
import MAIL_ENGINE from '../Controller/EmailController.js';

const router = Router();

router.route('/')
    .post(MAIL_ENGINE.MAIL_ENGINE)

export default router;