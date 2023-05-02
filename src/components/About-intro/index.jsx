import React, { useState, useRef } from "react";
import Image from "next/image";
import AboutInfo1Data from "../../data/sections/about-info1.json";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AboutIntro = () => {
  const [showMore, setShowMore] = useState(false);
  const audioPlayerRef = useRef(null); // Ref al componente AudioPlayer

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
            <div className="htit sm-mb30 pb-60">
              <h4 style={{ color: "#69FE46" }}>{AboutInfo1Data.title}</h4>
            </div>
            <Image
              src="/img/profe-about.jpg"
              height="700px"
              width="270px"
              alt="foto"
            />
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="reproductor-container pt-50">
              <div className="reproductor pb-50">
                <h6 style={{ textAlign: "center", color: "#69fa26" }}>
                  Escuchar...
                </h6>
                <AudioPlayer
                  className="audio-player green-audio-player"
                  ref={audioPlayerRef}
                  autoPlay={false}
                  src="/audio-final.mp3"
                  onPlay={(e) => console.log("onPlay")}
                  onPause={(e) => console.log("onPause")}
                  onEnded={(e) => console.log("onEnded")}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    alignItems: "center",
                    color: "#69fa26",
                  }}
                ></AudioPlayer>
              </div>
            </div>
            <div className="text">
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph1}
              </p>

              {showMore && (
                <>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph2}
                  </p>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph3}
                  </p>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {AboutInfo1Data.paragraph4}
                  </p>
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
            <h4
              className="pt-50"
              style={{ fontStyle: "italic", textAlign: "center" }}
            >
              “ La Energía que Eliges Sentir
            </h4>
            <h4 style={{ fontStyle: "italic", textAlign: "center" }}>
              es la Vida que Eliges Vivir ”
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
