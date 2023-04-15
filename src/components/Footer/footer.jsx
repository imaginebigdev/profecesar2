/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contactáme</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>elprofecesar.com@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefóno</h6>
                    <p>+54 351 240 4222</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Proyectos</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="https://deportesalternativos.com/argentina/enda-y-congreso-2022-confirmados/">
                      <a target="_blank" rel="noreferrer">
                        <img src="/img/blog/eventos.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="https://deportesalternativos.com/argentina/enda-y-congreso-2022-confirmados/">
                      <a target="_blank" rel="noreferrer">
                        <p>Del 25 al 27 de noviembre 16° edición del ENDA.</p>
                      </a>
                    </Link>
                    <Link href="https://deportesalternativos.com/argentina/enda-y-congreso-2022-confirmados/">
                      <a target="_blank" rel="noreferrer">
                        <span className="date">25 nov 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="https://deportesalternativos.com/argentina/">
                      <a target="_blank" rel="noreferrer">
                        <img src="/img/blog/deportes.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="https://deportesalternativos.com/argentina/">
                      <a target="_blank" rel="noreferrer">
                        <p>Beneficios de practicar deportes alternativos.</p>
                      </a>
                    </Link>
                    <Link href="https://deportesalternativos.com/argentina/">
                      <a target="_blank" rel="noreferrer">
                        <span className="date">20 abril 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a
                  href="https://www.facebook.com/soyelprofecesar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/soyelprofecesar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC4GuOIvk0LaeXPCnNr2adQg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, AMERICA CONSTRUCCIONES. MADE WITH PASSION BY{" "}
                  <Link href="https://imaginebig.dev">
                    <a target="_blank" rel="noreferrer">
                      {" "}
                      Imagine Big
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
