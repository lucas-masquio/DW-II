import { createContext, useContext } from "react";

// Objetivo: compartilhar um tema entre dois componentes sem prop drilling
const UserContext = createContext(); 

function GrandChild() {
  const user = useContext(UserContext);
  return <p>Olá, {user.nome}! Você tem {user.idade} anos.</p>;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  return <Child />;
}

export default function Atividade2() {
  const user = { nome: "Carlos", idade: 42 };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}
