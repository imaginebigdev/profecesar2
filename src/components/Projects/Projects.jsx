import React from "react";
import initIsotope from "../../common/initIsotope";
import { Link } from "react-scroll";

const Projects = () => {
  let [section, setSection] = React.useState({
    youth: true,
    sports: false,
    security: false,
    teraphy: false,
  });
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section
      className="portfolio po-arch section-padding pb-70"
      id="po-arch"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2
                style={{
                  color: "#69FE46",
                  fontSize: "50px",
                }}
                className="wow fadeIn"
                data-wow-delay=".3s"
              >
                Proyectos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span
                className="active"
                value="youth"
                onClick={() =>
                  setSection({
                    youth: true,
                    sports: false,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                Deportes Alternativos
              </span>
              <span
                value="sports"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: true,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                Eventos
              </span>
              <span
                value="security"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: true,
                    urbanism: false,
                  })
                }
              >
                Elemento Qi
              </span>
              <span
                value="security"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: false,
                    teraphy: true,
                  })
                }
              >
                Terapia Fisica
              </span>
            </div>
          </div>

          <div className="gallery full-width">
            {section.youth === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <a
                        href="https://deportesalternativos.com/argentina/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          style={{ marginBottom: "20px" }}
                          className="thumparallax-down wow fadeIn"
                          src="/img/blog/deportes.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">
                        Deportes Alternativos
                      </h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Gestiono superviso y elaboro proyectos de deportes
                        alternativos. Practicar deportes alternativos ofrece
                        numerosos beneficios para la salud física y mental.
                        Estos deportes implican un alto grado de movimiento y
                        coordinación, lo que ayuda a mejorar la flexibilidad, la
                        agilidad y la coordinación. Además, estos deportes
                        suelen realizarse al aire libre, lo que proporciona una
                        mayor exposición a la luz solar y la vitamina D, lo que
                        favorece la salud ósea y el sistema inmunológico. Por
                        otro lado, los deportes alternativos también tienen
                        beneficios para la salud mental. Al ser actividades
                        lúdicas y creativas, ayudan a reducir el estrés y la
                        ansiedad, mejoran la autoestima y la confianza en uno
                        mismo, y fomentan el trabajo en equipo y la
                        socialización.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.sports === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <a
                        href="https://deportesalternativos.com/argentina/enda-y-congreso-2022-confirmados/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          style={{ marginBottom: "20px" }}
                          className="thumparallax-down wow fadeIn"
                          src="/img/blog/eventos.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">ENDA</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Formo parte de la comisión de trabajo en el ENDA
                        (Encuentro nacional de deportes alternativos). Donde
                        cada año se reunen especialistas de nuestro pais y de
                        Sudamerica. A traves de este encuentro de alta
                        convocatoria promovemos el desarrollo y el despliegue de
                        los deportes alternativos en las entidades educativas.
                        Estamos planificando la edicion 2023 en Cordoba Capital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.security === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <a>
                        <img
                          style={{ marginBottom: "20px" }}
                          className="thumparallax-down wow fadeIn"
                          src="/img/blog/elemento.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">Elemento Qi</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Método de la Psicoterapia Oriental de Elemento Qi:
                        Conciencia Personal, un método absolutamente
                        introspectivo y eficaz. Está en proceso de crear el
                        primer Instituto bimodal de enseñanza personal y a
                        distancia sobre esta nueva propuesta, con el fin de
                        revalorizar enseñanzas antiguas, milenarias y santas de
                        el antiguo Oriente, llevadas al área personal y social
                        como herramienta creativa y práctica, referentes al
                        estudio de nuestras Energías y la canalización en todo
                        nuestro ser. Esta propuesta pedagógica se plantea Online
                        y a través de conferencias, talleres y seminarios, desde
                        sesiones y clases cortas hasta masterclass.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.teraphy === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        style={{ marginBottom: "20px", width: "470px" }}
                        className="thumparallax-down wow fadeIn"
                        src="/img/blog/terapias.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">
                        Terapias fisicas
                      </h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        <ul>
                          <li>
                            -Técnicas de Masajes Orientales y Terapéuticos..
                          </li>
                          <li>
                            -Ventosas -Tratamiento del Dolor -Rehabilitación
                          </li>
                          <li>
                            -Reeducación y Corrección Postural -Auriculoterapia
                          </li>
                          <li>
                            -Fitoterapia -Resultados desde la 1o Sesión
                            -Orientación para Recuperación Activa fuera del
                            consultorio
                          </li>
                          <li>
                            -Asesoramiento permanente -Especialista en
                            Deportistas
                          </li>
                          <li>-Psicoterapia Oriental</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
