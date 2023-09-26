import React from "react";
import styles from "./Slider.module.css";
import Slides from "./Slides";
import seta from "../assets/seta.svg";
import { usePersonagemContext } from "../PersonagemContext";

const Slider = () => {
  const numeroExibicaoPersonagens = 3;

  const { personagens } = usePersonagemContext();
  const [translateY, setTranslateY] = React.useState(0);
  const [itemCarrosselAtual, setItemCarrosselAtual] = React.useState(
    numeroExibicaoPersonagens
  );

  console.log("Quantidade de personagens:" + personagens.length);
  console.log("Estado atual:" + itemCarrosselAtual);

  function handleClickBaixo() {
    if (itemCarrosselAtual <= personagens.length) {
      setTranslateY(translateY - 80);
      setItemCarrosselAtual(itemCarrosselAtual + 1);
    }
  }

  function handleClickCima() {
    if (itemCarrosselAtual >= numeroExibicaoPersonagens) {
      setTranslateY(translateY + 80);
      setItemCarrosselAtual(itemCarrosselAtual - 1);
    }
  }

  return (
    <div className={styles.slider}>
      <button
        className={styles.botao}
        disabled={
          personagens.length - itemCarrosselAtual ===
          personagens.length - numeroExibicaoPersonagens
        }
        onClick={handleClickCima}
      >
        <img
          className={`${styles.cima}`}
          src={seta}
          alt="Rolar para cima"
          onClick={handleClickCima}
        />
      </button>

      <div className={styles.containerCarrossel}>
        <div
          className={styles.itens}
          style={{ transform: `translateY(${translateY}px)` }}
        >
          {personagens.map((personagem, index) => {
            return <Slides personagem={personagem} key={index} />;
          })}
        </div>
      </div>

      <button
        className={styles.botao}
        disabled={personagens.length - itemCarrosselAtual === 0}
        onClick={handleClickBaixo}
      >
        <img
          className={`${styles.baixo}`}
          src={seta}
          alt="Rolar para baixo"
          onClick={handleClickBaixo}
        />
      </button>
    </div>
  );
};

export default Slider;
