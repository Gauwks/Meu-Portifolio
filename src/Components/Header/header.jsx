import { Link } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/competencias">Competências</Link>
      <Link to="/contatos">Contato</Link>
    </nav>
  );
}

export default Header;