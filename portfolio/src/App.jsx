import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";   // ⭐ missing import

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";
import ProjectDetail from "./components/ProjectDetail";
import About from "./components/About";
import BackToTop from "./components/BackToTop";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <BackToTop/>
      <Navbar />

      <Routes>

        <Route path="/" element={
          <>
            <Hero/>
            <About/>
            <Services/>
            <Works/>
            <CaseStudy/>
            <Skills/>
            <Resume/>
            {/* <Blog/> */}
            <Contact/>
          </>
        }/>

        <Route path="/project/:id" element={<ProjectDetail/>}/>

      </Routes>

      <Footer/>

    </>
  );
}

export default App;