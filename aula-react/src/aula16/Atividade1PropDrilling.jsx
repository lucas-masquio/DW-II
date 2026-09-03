function GrandChild({ user }) {
  return <p>Olá, {user.nome}! Você tem {user.idade} anos.</p>;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

export default function Atividade1() {
  const user = { nome: "Ana", idade: 30 };
  return <Parent user={user} />;
}
