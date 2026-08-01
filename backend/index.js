import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./feature/auth/auth.router.js";
import connection from "./feature/config/db.js";

const app = express();

app.use(express.json());

app.use("/api", authRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});
