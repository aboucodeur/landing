import React from 'react'
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home_page">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Conçue pour simplifier et accélérer la gestion de vos stocks <span role='img' aria-labelledby='energy'>⚡</span>.
          </h1>
          <a href="https://www.ultra-glk.com" target="_blank" rel="noopener noreferrer">
            <button className="secondary-button">
              Tester maintenant <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <img src={require('../Assets/commandes_achats.png')} alt="" />
        {/* <div className="home-bannerImage-container"> */}
        {/* <img src={BannerBackground} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
