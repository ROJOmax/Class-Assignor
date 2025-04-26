import jwt from "jsonwebtoken";

// checks if a valid JWT is included in the request
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(403).json({ error: "Invalid Token" });
  }
};

const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };

export { authenticateJWT, restrictTo };
