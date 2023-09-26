import React from "react";
import styles from "./Slider.module.css";
import Slides from "./Slides";
// import seta from "../assets/seta.svg";
import { usePersonagemContext } from "../PersonagemContext";

const Slider = () => {
  const { personagens } = usePersonagemContext();

  return (
    <div className={styles.slider}>
      {/* <button>
        <img
          className={styles.voltar}
          src={seta}
          alt="voltar"
          // onClick={handleClickVoltar}
        />
      </button> */}

      {personagens.map((personagem, index) => {
        return <Slides personagem={personagem} key={index} />;
      })}

      {/* <button>
        <img
          className={styles.avancar}
          src={seta}
          alt="avançar"
          // onClick={handleClickAvancar}
        />
      </button> */}
    </div>
  );
};

export default Slider;
