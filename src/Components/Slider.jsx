import styles from "./Slider.module.css";
import Slides from "./Slides";
import seta from "../assets/seta.svg";

const Slider = ({ personagens, setPersonagemAtivo }) => {
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
        return (
          <Slides
            setPersonagemAtivo={setPersonagemAtivo}
            key={index}
            personagem={personagem}
          />
        );
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
