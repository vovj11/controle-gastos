import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2>Controle de Gastos</h2>

      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Transações
        </Link>

        <Link
          to="/persons"
          className={location.pathname === "/persons" ? "active" : ""}
        >
          Pessoas
        </Link>

        <Link
          to="/categories"
          className={location.pathname === "/categories" ? "active" : ""}
        >
          Categorias
        </Link>
      </div>
    </nav>
  );
}
