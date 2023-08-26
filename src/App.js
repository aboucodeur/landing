import React from 'react'
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      {/* scroller en haut */}
      <div id="top" />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      <a
        href="#top"
        className={`scroll-to-top ${scrollActive ? "active" : ""}`}
      >
        {/* Scroll To Top */}
        <AiOutlineArrowUp />
        Monter
      </a>
    </div>
  );
}

export default App;