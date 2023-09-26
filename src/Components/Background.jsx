import React from "react";
import styles from "./Background.module.css";
import { usePersonagemContext } from "../PersonagemContext";

const Background = () => {
  const { personagens, personagemAtivoID } = usePersonagemContext();

  const personagemAtual = personagens.find(
    (personagem) => personagem.id === personagemAtivoID
  );

  return (
    <div className={styles.background}>
      <img
        src={`../src/assets/${personagemAtual.imagem}`}
        alt={personagemAtual.nome}
      />
    </div>
  );
};

export default Background;
