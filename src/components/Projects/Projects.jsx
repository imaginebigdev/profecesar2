import React from "react";
import initIsotope from "../../common/initIsotope";
import Image from "next/image";

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
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2
                style={{
                  color: "#69FE46",
                  fontSize: "50px",
                }}
                className="wow fadeIn pb-50"
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
                        <Image
                          height="470"
                          width="500"
                          className="thumparallax-down wow fadeIn"
                          src="/img/blog/deportes.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn ">
                        Deportes Alternativos
                      </h4>
                      <p className="wow txt wow fadeIn pb-30" data-splitting>
                        Gestiono, superviso y elaboro proyectos de deportes
                        alternativos, incluyendo los adaptados para personas con
                        discapacidades motrices y cognitivas. Practicar deportes
                        alternativos ofrece numerosos beneficios para la salud.
                        Estos deportes implican un alto grado de movimiento y
                        coordinación, lo que ayuda a mejorar la flexibilidad, la
                        agilidad y la coordinación. Además, suelen realizarse al
                        aire libre, lo que proporciona una mayor exposición a la
                        luz solar y la vitamina D, lo que favorece la salud ósea
                        y el sistema inmunológico. También reconozco la
                        importancia de los juegos de mesa como herramienta de
                        neuroeducación, lo que los convierte en una excelente
                        opción para complementar la práctica deportiva y mejorar
                        las habilidades cognitivas.
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
                        <Image
                          height="470"
                          width="500"
                          className="thumparallax-down wow fadeIn"
                          src="/img/blog/eventos.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn ">ENDA</h4>
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
                        <Image
                          height="470"
                          width="500"
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
                      <a href="https://www.elementoqi.com">Leer Más...</a>
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
                      <Image
                        height="470"
                        width="500"
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

                      <ul className="wow txt wow fadeIn" data-splitting>
                        <li>
                          -Técnicas de Masajes Orientales y Terapéuticos..
                        </li>
                        <li>-Ventosas</li>
                        <li>-Tratamiento del Dolor</li>
                        <li>-Rehabilitación</li>
                        <li>-Reeducación y Corrección Postural</li>
                        <li>-Auriculoterapia</li>
                        <li>-Fitoterapia</li>
                        <li>-Resultados desde la 1º Sesión</li>
                        <li>
                          -Orientación para Recuperación Activa fuera del
                          consultorio
                        </li>
                        <li>-Asesoramiento permanente</li>
                        <li>-Especialista en Deportistas</li>
                        <li>-Psicoterapia Oriental</li>
                      </ul>
                      {/*  <a href="https://www.trapiasfisicas.com.ar">
                        Leer Más...
                      </a> */}
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
