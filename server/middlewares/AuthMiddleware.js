const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Token is required");
  }

  try {
    const decoded = jwt.verify(token, "secretissecret");
    if (!decoded) return res.status(401).send("Invalid token");
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

module.exports = authMiddleware;
