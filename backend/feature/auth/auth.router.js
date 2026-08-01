import express from "express";

import { signup } from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post("/users/signup", signup);

export default authRouter;
