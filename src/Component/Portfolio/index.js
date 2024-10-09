import React, { useState, useEffect } from "react";
import { data } from "../arrayInfo";
import "./Portfolio.css";
import Modal from "../Modal";
const Portfolio = () => {
  const [projets, setProjets] = useState(data[0].projets);
  const [showModalInfo, setShowModalInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setProjets(data[0].projets);
  }, []);
  const showModal = (projet) => {
    setOpenModal(true);
    setShowModalInfo(projet);
  };
  const closeModal = () => {
    setOpenModal(false);
    setShowModalInfo([]);
  };
  const displayProjects = projets?.map((i, index) => (
    <div className="card" key={index} onClick={() => showModal(i)}>
      <img
        src={Array.isArray(i.image) ? i.image[0] : i.image}
        alt={i.title}
        className="image"
      />
      <div className="containerTitle">
        <h3>{i.title}</h3>
      </div>
    </div>
  ));
  return (
    <div className="Portfolio-container">
      <h1>Mes travaux récents</h1>
      <div className="container-contenu">{displayProjects}</div>
      <Modal
        show={openModal}
        onHide={closeModal}
        showModalInfo={showModalInfo}
      />
    </div>
  );
};
export default Portfolio;
