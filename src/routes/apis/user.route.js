import express from 'express';
import userController from '../../controller/user.controller.js';
import auth from '../../middleware/authenticateJWT.js';
import admin from '../../middleware/admin.js';
const router = express.Router();

router.get('/me', auth, userController.getMe);
router.get('/', auth, admin, userController.getAllUsers);
router.delete('/:id', auth, admin, userController.deleteUser);

export default router; 