import "./header.css";
import Button from "../../../components/button/Button";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>Notely</h2>
      </div>
      <div className="btn-login-options">
        <Button text="Iniciar sesion" className="btn-login" />
        <Button text="Crear cuenta" className="btn-signup" />
      </div>
    </header>
  );
};

export default Header;
