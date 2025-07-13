import express from 'express';
import { body } from 'express-validator';
import authController from '../../controller/auth.controller.js';
const router = express.Router();

router.post('/register', [
  body('name').notEmpty().withMessage('Tên không được để trống'),
  body('email').isEmail().withMessage('Email không hợp lệ'),
  body('password').isLength({ min: 6 }).withMessage('Mật khẩu tối thiểu 6 ký tự')
], authController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Email không hợp lệ'),
  body('password').notEmpty().withMessage('Mật khẩu không được để trống')
], authController.login);

export default router; 