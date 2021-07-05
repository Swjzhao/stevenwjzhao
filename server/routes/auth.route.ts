import express from 'express';

import * as authController from '../controllers/auth.controller';
import { validRegister } from '../middleware';

const router = express.Router();

router.post('/sign_up', validRegister, authController.signUp);
router.post('/sign_in', authController.signIn);
router.get('/verify', authController.verifyToken);

export default router;
