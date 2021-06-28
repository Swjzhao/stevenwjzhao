import express from 'express';

import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/sign_up', authController.signUp);
router.post('/sign_in', authController.signIn);

export default router;
