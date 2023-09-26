import React from "react";
import styles from "./Slides.module.css";
import { usePersonagemContext } from "../PersonagemContext";

const Slides = ({ personagem }) => {
  const { setPersonagemAtivoID } = usePersonagemContext();

  function handleClick(e) {
    e.preventDefault();
    setPersonagemAtivoID(personagem.id);
  }

  return (
    <div className={styles.preview} onClick={handleClick}>
      {<img src={`src/assets/${personagem.imagem}`} alt={personagem.nome} />}
    </div>
  );
};

export default Slides;
