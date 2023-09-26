// import React from "react";
import styles from "./Personagem.module.css";
import Logo from "../assets/OnePieceLogo.svg";

const Personagem = ({ personagem }) => {
  return (
    <div className={styles.personagem}>
      <img src={Logo} alt="One Piece Logo" />
      <h1>{personagem.nome}</h1>
      <p>{personagem.descricao}</p>
    </div>
  );
};

export default Personagem;
