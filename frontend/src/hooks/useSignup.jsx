import { signup } from "../pages/auth/services/authService";
import { useState } from "react";

export const useSignup = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await signup(name, email, password);

      setResult(response);
    } catch (err) {
      console.error("Ha ocurrido un error al registrar el usuario: ", err);
      setResult({
        success: false,
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return [register, result, loading];
};
