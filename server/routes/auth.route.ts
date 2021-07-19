import express from 'express';

import * as authController from '../controllers/auth.controller';
import { validRegister } from '../middleware';

const router = express.Router();

router.post('/sign_up', validRegister, authController.signUp);
router.post('/sign_in', authController.signIn);
router.post('/sign_in_with_third_party', authController.signInWithThirdParty);
router.get('/verify', authController.verifyToken);
router.post('/activate', authController.activateAccount);
router.get('/refresh_token', authController.refreshAuth);
router.get('/sign_out', authController.signOut);

export default router;
