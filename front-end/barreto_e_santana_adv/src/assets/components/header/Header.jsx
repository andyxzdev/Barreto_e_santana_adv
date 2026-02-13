import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../logo/Logo2.png";
import { Link } from "react-router-dom";

const Header = ({ customStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="Logo" style={customStyle}>
        <img src={Logo} alt="logoTopo" />
      </div>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/home" onClick={toggleMenu}>
              Início
            </Link>
          </li>
          <li>
            <a href="#valores" onClick={toggleMenu}>
              Valores
            </a>
          </li>
          <li>
            <Link to="/sobre" onClick={toggleMenu}>
              Sobre nós
            </Link>
          </li>
          <li>
            <a href="#Resultados" onClick={toggleMenu}>
              Resultados
            </a>
          </li>
          <li>
            <a href="#Áreas de atuação" onClick={toggleMenu}>
              Áreas de atuação
            </a>
          </li>
          <li>
            <a href="#Feedbacks" onClick={toggleMenu}>
              Feedbacks
            </a>
          </li>
          <li>
            <a href="#Como_ajudamos" onClick={toggleMenu}>
              Como ajudamos
            </a>
          </li>
          <button
            className="ButtonTopo"
            onClick={() => {
              toggleMenu();
              window.open("https://wa.me/5524993215864", "_blank");
            }}
          >
            Contato
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
