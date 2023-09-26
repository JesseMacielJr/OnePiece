import React from "react";
import "./App.css";
import Slider from "./Components/Slider";
import Personagem from "./Components/Personagem";
import Footer from "./Components/Footer";

const personagens = [
  {
    nome: "Monkey D. Luffy",
    descricao:
      "Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo.",
    imagem: "luffy.jpg",
  },
  {
    nome: "Zoro",
    descricao:
      "Roronoa Zoro, é um personagem fictício da série One Piece criada por Eiichiro Oda. Na história, Zoro era um caçador de piratas que por fim se torna um quando é convencido pelo protagonista Monkey D. Luffy a ser o primeiro membro de sua tripulação, os Piratas do Chapéu de Palha",
    imagem: "zoro.jpg",
  },
  {
    nome: "Usopp",
    descricao:
      "Usopp é um personagem fictício da série em mangá One Piece criada por Eiichiro Oda. Ele faz parte do grupo principal, os Piratas do Chapéu de Palha, onde atua primariamente como atirador mas quando necessário cumpre outras posições como inventor, escultor e pintor.",
    imagem: "usopp.jpg",
  },
];

function App() {
  const [personagemAtivo, setPersonagemAtivo] = React.useState("luffy.jpg");

  return (
    <div className="container">
      <div className="background">
        <img
          src={`../src/assets/${personagemAtivo}`}
          alt={personagens.find(
            (personagem) => personagem.imagem === personagemAtivo
          )}
        />
      </div>
      <main>
        <section>
          <Personagem
            personagem={personagens.find(
              (personagem) => personagem.imagem === personagemAtivo
            )}
          />
          <Slider
            setPersonagemAtivo={setPersonagemAtivo}
            personagens={personagens}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
