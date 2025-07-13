import express from 'express';
import authRoute from './apis/auth.route.js';
import bookRoute from './apis/book.route.js';
import reviewRoute from './apis/review.route.js';
import userRoute from './apis/user.route.js';

const routes = express.Router();
routes.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Server đang hoạt động',
    timestamp: new Date().toISOString()
  });
});

routes.use('/auth', authRoute);
routes.use('/books', bookRoute);
routes.use('/reviews', reviewRoute);
routes.use('/users', userRoute);

export default routes;