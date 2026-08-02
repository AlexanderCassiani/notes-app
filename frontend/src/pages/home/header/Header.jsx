import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>Notely</h2>
      </div>

      <div className="btn-login-options">
        <Link to="/login" className="btn-login">
          Iniciar sesión
        </Link>
        <Link to="/signup" className="btn-signup">
          Registrarse
        </Link>
      </div>
    </header>
  );
};

export default Header;
