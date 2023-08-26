import React from 'react'

const Work = () => {
  const workInfoData = [
    {
      title: "0 XOF / 1 SEMAINES",
      text: "N'attendez plus 20 ans pour avoir votre logiciel de gestion de stock !",
    },
    {
      title: "200 000 XOF / ans",
      text: `Un plan d'abonnement pratique pour les PME / Particuliers, avec toutes les fonctionnalités disponibles. 
              Économisez en évitant les paiements mensuels.`,
    },
    {
      title: "300 000 XOF / ans",
      text: "Un plan d'abonnement pratique pour les grandes entreprises, qui doivent disposer d'une licence pour utiliser le logiciel."
    }
  ];
  return (
    <div className="work-section-wrapper" id="pricing_page">
      <div className="work-section-top">
        <p className="primary-subheading">PRIX</p>
        <h1 className="primary-heading">
          Le plus simple et facile!
        </h1>
        <p className="primary-text">
          N'attendez plus <mark>20 ans</mark> pour avoir votre logiciel de gestion.<br />
          Simple et facile sans configuration necessaire ,
          ne perdez plus de temps sur des fichiers excels !
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;