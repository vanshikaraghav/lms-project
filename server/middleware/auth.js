const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // Get token from header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Replace with process.env.JWT_SECRET in production
    req.user = decoded; // Store decoded payload in request
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
}

module.exports = auth;
