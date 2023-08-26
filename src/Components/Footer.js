import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <h1 style={{ color: "blue" }}>YEYE | GESTION STOCK & ENTEPRISE</h1>
        <p>Suivez nous sur nos reseaux sociaux !</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/yeyestock">
            <SiLinkedin />
          </a>
          <a href="https://facebook.com/yeyeapp">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>+223 94-86-58-79</span>
          <span>codeurabou123@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
