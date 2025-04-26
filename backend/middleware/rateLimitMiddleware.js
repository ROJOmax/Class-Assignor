import rateLimit from "express-rate-limit";

export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15mn
  max: 5, //limit to 5 attempts
  message: "Too many login attempts, please try again later",
});
