import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <h2 className="logo">ZENITH BONSAI</h2>

        <nav>
          <Link to="/">Filosofía</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/reservas">Reservas</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;