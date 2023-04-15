import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
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
              <Link
                className="nav-link"
                to=""
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                offset={50}
                duration={500}
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth="true"
                offset={50}
                duration={500}
              >
                Sobre mi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="portfolio-cr section-padding pb-50"
                smooth="true"
                offset={50}
                duration={500}
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                smooth="true"
                offset={50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/proyectos"
                smooth="true"
                offset={50}
                duration={500}
              >
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
