import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Kasa logo" className="header__logo" />

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link--active" : "nav__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link--active" : "nav__link"
          }
        >
          A&nbsp;propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
