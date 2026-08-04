import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./feature/auth/auth.router.js";
import connection from "./config/db.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", authRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});
