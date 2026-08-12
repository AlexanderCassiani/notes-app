import "./sidebar.css";
import { NavLink } from "react-router-dom";

const SideBar = ({ img, nombre, correo }) => {
  return (
    <aside className="sidebar">
      <div className="navigation-container">
        <h2>Notely</h2>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink>Notas</NavLink>
            </li>
            <li>
              <NavLink>Papelera</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <img src={img} alt="Foto de perfil" />
        <span>{nombre}</span>
        <span>{correo}</span>
      </div>
    </aside>
  );
};

export default SideBar;
