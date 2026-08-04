import express from "express";

import { signup, login } from "./auth.controller.js";
import authLimit from "../../middleware/rateLimit.js";

const authRouter = express.Router();

authRouter.post("/users/signup", authLimit, signup);
authRouter.post("/users/login", authLimit, login);

export default authRouter;
