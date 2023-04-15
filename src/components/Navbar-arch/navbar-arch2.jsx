import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch2 = ({ navbarRef, theme }) => {
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="">
          <img
            src={appData.lightLogo}
            alt="logo"
            style={{ width: "300px", marginLeft: "20px", marginTop: "20px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/proyectos">
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch2;
