import express from 'express';
import { body } from 'express-validator';
import bookController from '../../controller/book.controller.js';
import auth from '../../middleware/authenticateJWT.js';
import admin from '../../middleware/admin.js';
const router = express.Router();

router.get('/', bookController.getBooks);
router.post('/', auth, admin, [
  body('title').notEmpty().withMessage('Tiêu đề không được để trống'),
  body('author').notEmpty().withMessage('Tác giả không được để trống')
], bookController.createBook);
router.get('/:id', bookController.getBookDetail);

export default router; 