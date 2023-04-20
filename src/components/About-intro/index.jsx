import React, { useState } from "react";
import Image from "next/image";
import AboutInfo1Data from "../../data/sections/about-info1.json";

const AboutIntro = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <section className="intro-section section-padding pb-0" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4" style={{ textAlign: "center" }}>
            <div className="htit sm-mb30" style={{ marginBottom: "10px" }}>
              <h4 style={{ color: "#69FE46" }}>{AboutInfo1Data.title}</h4>
            </div>
            <Image
              src="/img/profe-about.jpg"
              height="1400px"
              width="270px"
              alt="foto"
            />
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph1}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph2}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph3}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph4}
              </p>
              {showMore && (
                <>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph6}
                  </p>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph7}
                  </p>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph8}
                  </p>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph9}
                  </p>
                </>
              )}
              {!showMore && (
                <button className="btn-leermas" onClick={handleShowMore}>
                  Leer más...
                </button>
              )}
              {showMore && (
                <button className="btn-leermas" onClick={handleShowLess}>
                  Leer menos...
                </button>
              )}
            </div>
            <br />
            <h4 style={{ fontStyle: "italic" }}>
              “La energía que elegimos sentir es la vida que elegimos vivir”
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
