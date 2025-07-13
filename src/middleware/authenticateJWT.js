import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Không có token' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token không hợp lệ' });
  }
};

// Middleware xử lý 404
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Không tìm thấy endpoint này!'
  });
};

// Middleware xử lý lỗi chung
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Lỗi server',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

export default authenticateJWT; 