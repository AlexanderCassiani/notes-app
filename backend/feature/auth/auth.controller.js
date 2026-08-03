import validateUser from "./auth.validation.js";
import { findByEmail, createUser } from "./auth.model.js";
import bcrypt from "bcrypt";
import generateToken from "./generateToken.js";

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
        message: "Datos inválidos",
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
      message: "Usuario registrado correctamente",
      newUser: {
        id: newUser.insertId,
        name,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al registrar el usuario. Inténtelo mas tarde",
    });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Todos los datos son requeridos",
    });
  }

  let user;

  try {
    user = await findByEmail(email);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al registrar el usuario",
    });
  }

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Credenciales incorrectas",
    });
  }

  let coincide;

  try {
    coincide = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Credenciales incorrectas",
    });
  }

  if (coincide) {
    const token = generateToken(user.id, user.email);
    res.json({
      success: true,
      message: "Usuario logueado exitosamente",
      user: {
        id: user.id_user,
        name: user.name,
        token,
      },
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Credenciales incorrectas",
    });
  }
}
