import express from 'express';

import * as authController from '../controllers/auth.controller';
import { validRegister } from '../middleware';
import * as userMiddleWare from '../middleware/user.middleware';

const router = express.Router();

router.post('/sign_up', validRegister, authController.signUp);
router.post('/sign_in', authController.signIn);
router.post('/sign_in_with_third_party', authController.signInWithThirdParty);
router.get('/verify', authController.verifyToken);
router.post('/activate', authController.activateAccount);
router.get('/refresh_token', authController.refreshAuth);
router.get('/sign_out', authController.signOut);
router.post('/send_reset_password', authController.sendResetPassword);
router.post(
  '/send_reset_password/:id',
  userMiddleWare.userModChecker,
  authController.sendResetPassword
);
router.patch('/change_password', userMiddleWare.authChecker, authController.changePassword);

export default router;
