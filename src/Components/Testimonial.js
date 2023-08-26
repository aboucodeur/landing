import React from 'react'
import { AiFillStar, AiFillTablet } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">AVIS !</p>
        <h1 className="primary-heading">Mission</h1>
        <p className="primary-text">
          Une nouvelle ère de gestion de stock commence ici, depuis l'Afrique. <span role='img' aria-labelledby='star'>🌟</span>
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={MeProfile} alt="" /> */}
        <p>
          <AiFillTablet />
          Vous n'avez pas besoin d'être un expert en économie pour gérer efficacement votre stock.
          Contrairement à des options telles que #ODOO, #SAP et #ORACLE, notre logiciel yeye a été
          conçu pour offrir une gestion simplifiée, adaptée à tous les niveaux d'expérience.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aboubacar Barry - Createur de yeye.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
