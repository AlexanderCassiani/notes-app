import rateLimit from "express-rate-limit";

const authLimit = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutos
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: {
    success: false,
    message: "Demasiados intentos",
  },
});

export default authLimit;
