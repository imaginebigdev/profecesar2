/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ModalVideo from "react-modal-video";
import PageHeader from "../Page-header/page-header";
import Video2 from "../Video2/video2";

const WorksStyle3 = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [videos, setVideos] = React.useState([
    { id: "rAKqLt0PH8g" },
    { id: "kXfZMB92E0Q" },
    { id: "W3JWRVIBveI" },
    { id: "bSwLXAYF8TU" },
  ]);
  const [currentVideo, setCurrentVideo] = React.useState("");

  React.useEffect(() => {
    console.clear();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  const openVideo = (videoId) => {
    setCurrentVideo(videoId);
    setOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideo("");
    setOpen(false);
  };

  return (
    <section className="portfolio-cr section-padding pb-50">
      <div className="container">
        <div className="sec-head  text-center">
          <h2 className="wow fadeIn" data-wow-delay=".3s">
            Videos
          </h2>
        </div>
        <div className="row">
          <div className="gallery-mons full-width">
            <div className="items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <a
                  className="vid valign"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <img
                    src="/img/portfolio/cr/cesar01.jpg"
                    alt="image"
                    onClick={() => openVideo(videos[0].id)}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>
            <div className="items web brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <a
                  className="vid valign"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <img
                    src="/img/portfolio/cr/cesar02.jpg"
                    alt="image"
                    onClick={() => openVideo(videos[1].id)}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>

            <div
              className="items width2 brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a
                  className="vid valign"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <img
                    src="/img/portfolio/cr/cesar03.jpg"
                    alt="image"
                    onClick={() => openVideo(videos[2].id)}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>

            <div
              className="items width2 graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a
                  className="vid valign"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <img
                    src="/img/portfolio/cr/cesar04.jpg"
                    alt="image"
                    onClick={() => openVideo(videos[3].id)}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={currentVideo}
          onClose={closeVideo}
        />
      )}
    </section>
  );
};

export default WorksStyle3;
