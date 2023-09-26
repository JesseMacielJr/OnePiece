import React from "react";

const PersonagemContext = React.createContext();

export const usePersonagemContext = () => React.useContext(PersonagemContext);

export const PersonagemProvider = ({ children }) => {
  const listaPersonagens = [
    {
      id: 0,
      nome: "Monkey D. Luffy",
      descricao:
        "Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo.",
      imagem: "luffy.jpg",
    },
    {
      id: 1,
      nome: "Zoro",
      descricao:
        "Roronoa Zoro, é um personagem fictício da série One Piece criada por Eiichiro Oda. Na história, Zoro era um caçador de piratas que por fim se torna um quando é convencido pelo protagonista Monkey D. Luffy a ser o primeiro membro de sua tripulação, os Piratas do Chapéu de Palha",
      imagem: "zoro.jpg",
    },
    {
      id: 2,
      nome: "Nami",
      descricao:
        "Nami, é uma personagem fictícia do mangá e anime One Piece criada por Eiichiro Oda. Nami é introduzida na narrativa como uma aliada oportunista do protagonista Monkey D. Luffy mas que possui motivos nobres por trás de suas ações ambíguas.",
      imagem: "nami.jpg",
    },
    {
      id: 3,
      nome: "Usopp",
      descricao:
        "Usopp é um personagem fictício da série em mangá One Piece criada por Eiichiro Oda. Ele faz parte do grupo principal, os Piratas do Chapéu de Palha, onde atua primariamente como atirador mas quando necessário cumpre outras posições como inventor, escultor e pintor.",
      imagem: "usopp.jpg",
    },
    {
      id: 4,
      nome: "Sanji",
      descricao:
        "Vinsmoke Sanji é um personagem criado por Eiichiro Oda para o seu mangá e anime One Piece. Ele é introduzido ainda na primeira saga da história como um cozinheiro do restaurante-navio Baratie e depois passa a trabalhar para o capitão Monkey D. Luffy no seu bando dos Piratas do Chapéu de Palha.",
      imagem: "sanji.jpg",
    },
    {
      id: 5,
      nome: "Chopper",
      descricao:
        "Tony Tony Chopper, também conhecido como Amante de Algodão Doce, é um personagem fictício da série de mangá One Piece criada por Eiichiro Oda. Ele é o sexto membro a se juntar e o médico dos Piratas do Chapéu de Palha. Chopper é freqüentemente apresentado em mercadorias oficiais, servindo como mascote da série",
      imagem: "chopper.jpg",
    },
    {
      id: 6,
      nome: "Robin",
      descricao:
        "Nico Robin é uma personagem fictícia da obra japonesa One Piece de Eiichiro Oda. Inicialmente uma antagonista, ela depois convence o capitão Monkey D. Luffy a deixá-la entrar no seu bando dos Piratas do Chapéu de Palha.",
      imagem: "robin.jpg",
    },
    {
      id: 7,
      nome: "Franky",
      descricao:
        "Franky é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios.",
      imagem: "franky.png",
    },
    {
      id: 8,
      nome: "Brook",
      descricao:
        "Brook é um esqueleto extremamente alto vestido em traje formal completo com cartola e bengala.",
      imagem: "brook.png",
    },
  ];

  const [personagens, setPersonagens] = React.useState(listaPersonagens);
  const [personagemAtivoID, setPersonagemAtivoID] = React.useState(0);

  return (
    <PersonagemContext.Provider
      value={{
        personagens,
        setPersonagens,
        personagemAtivoID,
        setPersonagemAtivoID,
      }}
    >
      {children}
    </PersonagemContext.Provider>
  );
};
