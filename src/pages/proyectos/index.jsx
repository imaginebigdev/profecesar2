import React from "react";
import NavbarArch2 from "../../components/Navbar-arch/navbar-arch2";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import Projects from "../../components/Projects/Projects";
import IntroWithSlider2 from "../../components/Intro-with-slider/intro-with-slider2";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
      <NavbarArch2 navbarRef={navbarRef} theme="themeD" />
      <IntroWithSlider2 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Projects />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
