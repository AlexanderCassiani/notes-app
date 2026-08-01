import validateUser from "./auth.validation.js";
import { findByEmail, createUser } from "./auth.model.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Todos los datos son obligatorios",
      });
    }

    if (!validateUser(name, email, password)) {
      return res.status(400).json({
        success: false,
        message: "Datos invalidos",
      });
    }

    const result = await findByEmail(email);

    if (result) {
      return res.status(409).json({
        success: false,
        message: "El correo ya se encuentra registrado",
      });
    }

    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error al hashear la contraseña",
      });
    }

    const newUser = await createUser(name, email, hashedPassword);

    res.status(201).json({
      success: true,
      message: "Nuevo usuario creado",
      newUser: {
        id: newUser.insertId,
        name,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al registrar el usuario. Intentelo mas tarde",
    });
  }
}
