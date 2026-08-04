import "./loginForm.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import toHome from "../../../assets/icons/auth/toHome.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useState } from "react";
import Loader from "../../../components/loader/Loader";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logIn, data, loading] = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);

    console.log(data);
  };

  const handleSuccess = async (response) => {
    const res = await googleLogin(response.credential);

    console.log(res);
  };

  const handleError = (error) => {
    console.error("Error al loguearse con google: ", error);
  };

  return (
    <form className="login-form">
      <div>
        <h2>Inicia sesión</h2>
        <p>inicia sesión para empezar a gestionar tus ideas</p>

        <Input
          placeholder="Correo electrónico"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Contraseña"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="btn-login"
          text={loading ? <Loader /> : "Iniciar sesión"}
          onClick={handleSubmit}
        />

        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />

        <p className="no-tiene-cuenta">
          ¿No tienes cuenta?{" "}
          <Link to="/signup" className="no-tiene-cuenta-link">
            Regístrate
          </Link>
        </p>

        <button className="btn-to-home" onClick={() => navigate("/")}>
          <img src={toHome} alt="Regresar" />
          Volver al inicio
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
