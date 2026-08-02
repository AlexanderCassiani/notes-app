import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import "./signupForm.css";
import toHome from "../../../assets/icons/auth/toHome.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import Loader from "../../../components/loader/Loader";

const SignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, result, loading] = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Registrarse</h2>
        <p>Registrate para empezar a gestionar tus ideas</p>
        <Input
          type="text"
          placeholder="Nombre completo"
          className="input"
          autoComplete="new-username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          className="input"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          className="input"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          text={loading ? <Loader /> : "Registrarme"}
          className="btn-form-login"
        />
      </div>

      {result ? (
        <p className={`result ${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      ) : null}

      <button className="btn-to-home" onClick={() => navigate("/")}>
        <img src={toHome} alt="Regresar" />
        Volver al inicio
      </button>
    </form>
  );
};

export default SignupForm;
