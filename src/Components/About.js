import React, { useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import PresentationVideo from '../Assets/yeye_promote.mp4';
import "./about.css"; // Assurez-vous d'importer vos styles CSS ici

const About = () => {
  const videoRef = useRef()

  return (
    <div className="about-container" id="about_page">
      <div className="video-container">
        <video ref={videoRef} className="video" controls poster={require('../Assets/commandes_achats.png')}>
          <source src={PresentationVideo} type="video/mp4" />
          Votre navigateur ne permet pas de lire les vidéos. Mais vous pouvez toujours
          <a href={PresentationVideo}>la télécharger</a> !
        </video>
      </div>
      <div className="text-container">
        <p className="primary-subheading">A propos</p>
        <h1 className="primary-heading">
          Une nouvelle ère de gestion de stock commence ici, depuis l'Afrique. <span role='img' aria-labelledby='star'>🌟</span>
        </h1>
        <p className="primary-text">
          Une approche simple et facile pour gérer votre stock
          sans nécessiter de configuration ni de connaissance en économie,
          disponible sur tous vos appareils (smartphone, tablette, ordinateur).
        </p>
        <p className="primary-text">
          Ne perdez plus de temps sur des fichiers Excel et des configurations pour une simple gestion !
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Tester grauitement ! </button>
          <button className="watch-video-button" onClick={() => {
            // jouer la video
            videoRef.current.play()
          }}>
            <BsFillPlayCircleFill /> Regarder la video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
