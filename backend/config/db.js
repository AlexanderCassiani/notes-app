import mysql2 from "mysql2/promise";
import "./env.js";

let db;

try {
  db = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
  });

  console.log("Conexion a la base de datos establecida correctamente");
} catch (err) {
  console.log("Error al conectarse a la base de datos");
}

export default db;
