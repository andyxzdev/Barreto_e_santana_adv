import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../logo/Logo2.png";
import { Link } from "react-router-dom";

const HeaderPoli = ({ customStyle }) => {
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
            <Link to="/sobre" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <button
            className="ButtonTopo"
            onClick={() => {
              toggleMenu();
              window.open("https://wa.me/553172057198", "_blank");
            }}
          >
            Contato
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPoli;
