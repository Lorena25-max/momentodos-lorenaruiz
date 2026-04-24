import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">

        {/* LOGO → lleva a HOME */}
        <Link to="/" className="logo">
          ZENITH BONSAI
        </Link>

        <nav>
          <Link to="/filosofia">Filosofía</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/reservas">Reservas</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;