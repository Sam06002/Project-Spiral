/**
 * JWT authentication middleware
 * @module middleware/auth
 */
const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT token
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken; 