import React from "react";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import WorksStyle3 from "../../components/Works-style3/works-style3";
import AboutIntro from "../../components/About-intro";
import ContactArch from "../../components/Contact-arch/contact-arch";
import Projects from "../../components/Projects/Projects";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <NavbarArch navbarRef={navbarRef} theme="themeD" />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutIntro />
        <WorksStyle3 />
        <Projects />
        <ContactArch />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
