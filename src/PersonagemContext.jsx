import React from "react";

const PersonagemContext = React.createContext();

export const PersonagemProvider = ({ children }) => {/ Personagem ativo

  return (
    <PersonagemContext.Provider value={{}}>
      {children}
    </PersonagemContext.Provider>
  );
};
