import db from "../config/db.js";

export async function findByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?";
  const [result] = await db.query(query, [email]);

  return result[0];
}

export async function createUser(name, email, password) {
  const query = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
  const [result] = await db.query(query, [name, email, password]);

  return result;
}
