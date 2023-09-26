import React from "react";
import styles from "./Slides.module.css";

const Slides = ({ personagem, setPersonagemAtivo }) => {
  function handleClick(e) {
    e.preventDefault();
    setPersonagemAtivo(personagem.imagem);
  }

  console.log(personagem);
  return (
    <div className={styles.preview} onClick={handleClick}>
      {<img src={`src/assets/${personagem.imagem}`} alt={personagem.nome} />}
    </div>
  );
};

export default Slides;
