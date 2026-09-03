function ListaProdutos({ produtos }) {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}

function Saudacao({ estaLogado }) {
    if (estaLogado) {
      return <h1>Bem-vindo!</h1>;
    }
    return <h1>Por favor, faça login.</h1>;
  }

  <p>{estaLogado ? 'Logout' : 'Login'}</p>
  {temMensagem && <p>Você tem mensagens novas!</p>}

  useEffect(() => {
    // código que será executado
  }, [dependencias]);

  useEffect(() => {
    console.log('Componente montado!');
  }, []);

  useEffect(() => {
    console.log('Idade atualizada:', idade);
  }, [idade]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Rodando...');
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);