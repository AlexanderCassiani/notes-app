import jwt from "jsonwebtoken";

function generateToken(id, email) {
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  return token;
}

export default generateToken;
