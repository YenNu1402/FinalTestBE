import express from 'express';
import { body } from 'express-validator';
import reviewController from '../../controller/review.controller.js';
import auth from '../../middleware/authenticateJWT.js';
const router = express.Router();

router.post('/books/:id/reviews', auth, [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating phải từ 1 đến 5'),
  body('comment').notEmpty().withMessage('Bình luận không được để trống')
], reviewController.createReview);

router.delete('/reviews/:id', auth, reviewController.deleteReview);

export default router; 