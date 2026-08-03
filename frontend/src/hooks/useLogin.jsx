import { useState } from "react";
import { login } from "../pages/auth/services/authService";

const useLogin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const logIn = async (email, password) => {
    try {
      setLoading(true);
      const response = await login(email, password);
      setData(response);
    } catch (err) {
      setData({
        success: false,
        message: err.message,
      });
      console.error("Ha ocurrido un error al iniciar sesión: ", err.message);
    } finally {
      setLoading(false);
    }
  };

  return [logIn, data, loading];
};

export default useLogin;
