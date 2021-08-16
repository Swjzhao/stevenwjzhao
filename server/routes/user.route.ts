import express from 'express';

import * as userController from '../controllers/user.controller';
import * as userMiddleWare from '../middleware/user.middleware';

const router = express.Router();

router.get('/:id', userController.getUser);
router.patch('', userMiddleWare.authChecker, userController.updateUser);
router.patch('/:id', userMiddleWare.userModChecker, userController.updateUser);
router.delete('/:id', userMiddleWare.userModChecker, userController.deleteUser);

export default router;
