import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/book_review',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpire: process.env.JWT_EXPIRE || '30d'
};

export default config; 