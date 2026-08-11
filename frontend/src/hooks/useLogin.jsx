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
      return response;
    } catch (err) {
      const errorData = {
        success: false,
        message: err.message,
      };
      setData(errorData);
      return errorData;
    } finally {
      setLoading(false);
    }
  };

  return [logIn, data, loading];
};

export default useLogin;
