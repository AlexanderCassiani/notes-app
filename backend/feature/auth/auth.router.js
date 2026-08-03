import express from "express";

import { signup, login } from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post("/users/signup", signup);
authRouter.post("/users/login", login);

export default authRouter;
