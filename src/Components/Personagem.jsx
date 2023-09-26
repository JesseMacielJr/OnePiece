import styles from "./Personagem.module.css";
import Logo from "../assets/OnePieceLogo.svg";
import { usePersonagemContext } from "../PersonagemContext";

const Personagem = () => {
  const { personagens, personagemAtivoID } = usePersonagemContext();
  const personagemAtual = personagens.find(
    (personagem) => personagem.id === personagemAtivoID
  );

  return (
    <div className={styles.personagem}>
      <img src={Logo} alt="One Piece Logo" />
      <div className={styles.info}>
        <h1>{personagemAtual.nome}</h1>
        <p>{personagemAtual.descricao}</p>
      </div>
    </div>
  );
};

export default Personagem;
