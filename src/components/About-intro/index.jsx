import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4" style={{ textAlign: "center" }}>
            <div className="htit sm-mb30">
              <h4 style={{ color: "#69FE46" }}>{AboutInfo1Data.title}</h4>
            </div>
            <img
              src="/img/profe-about.jpg"
              style={{
                height: "1400px",
                width: "270px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
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
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph6}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph7}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph8}
              </p>
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph9}
              </p>
            </div>
            <br />
            <h4>
              “La Energía que Elegimos Sentir, es la Vida que Elegimos Vivir”
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
