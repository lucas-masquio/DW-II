function Irmao1(props) {
  return (
    <div>
      <button onClick={() => props.enviarMensagem('Mensagem enviada pelo Irmão 1')}>
        Enviar Mensagem para o Irmão 2
      </button>
    </div>
  );
}

export default Irmao1;
